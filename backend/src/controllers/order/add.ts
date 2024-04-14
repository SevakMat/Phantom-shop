import { RequestHandler } from 'express';
import Joi from '@hapi/joi';
import { relogRequestHandler } from '../../middleware/request-middleware';
import { Order, Product } from '../../models';

export const addOrderSchema = Joi.object().keys({
  productIds: Joi.array().items(Joi.string().required()).required()
});

const addOrderWrapper: RequestHandler = async (req, res) => {
  const { productIds } = req.body;

  try {
    const products: Product[] = await Product.find({ _id: { $in: productIds } });

    const totalAmount: number = products.reduce((total: number, product: Product) => total + product.price, 0);
    const newOrder: Order = new Order({
      user: req.user.userId,
      products: products.map(product => product.id),
      totalAmount
    });

    await newOrder.save();

    await newOrder.populate('products').execPopulate();

    res.status(201).json(newOrder.toJSON());
  } catch (error) {
    console.error('Error adding order:', error);
    res.status(500).json({ error: 'Failed to add order' });
  }
};

export const addOrder = relogRequestHandler(addOrderWrapper, {
  validation: { body: addOrderSchema }
});
