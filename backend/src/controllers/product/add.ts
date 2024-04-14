import { RequestHandler } from "express";
import Joi from "@hapi/joi";
import { relogRequestHandler } from "../../middleware/request-middleware";
import { Product } from "../../models";

export const addProductSchema = Joi.object().keys({
  name: Joi.string().required(),
  price: Joi.number().required(),
});

const addWrapper: RequestHandler = async (req, res): Promise<void> => {
  const { name, price } = req.body;

  const product: Product = new Product({ name, price });
  await product.save();

  res.status(201).json(product.toJSON());
};

export const addProduct = relogRequestHandler(addWrapper, {
  validation: { body: addProductSchema, checkAdminRole: true },
});
