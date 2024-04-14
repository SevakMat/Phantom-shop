import { RequestHandler } from "express";
import Joi from "@hapi/joi";
import { relogRequestHandler } from "../../middleware/request-middleware";
import { Product } from "../../models";

export const updateProductSchema = Joi.object().keys({
  name: Joi.string(),
  price: Joi.number(),
});

// eslint-disable-next-line consistent-return
const updateWrapper: RequestHandler = async (req, res) => {
  const { productId } = req.query;
  const { name, price } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    if (name) product.name = name;
    if (price) product.price = price;

    await product.save();

    res.json(product.toJSON());
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateProduct = relogRequestHandler(updateWrapper, {
  validation: { body: updateProductSchema, checkAdminRole: true },
});
