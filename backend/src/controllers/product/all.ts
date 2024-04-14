import { RequestHandler } from "express";
import { relogRequestHandler } from "../../middleware/request-middleware";
import { Product } from "../../models";

const allWrapper: RequestHandler = async (req, res): Promise<void> => {
  const products: Product[] = await Product.find();
  res.status(200).json(products);
};

export const allProduct = relogRequestHandler(allWrapper);
