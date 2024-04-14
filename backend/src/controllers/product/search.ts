import { RequestHandler } from 'express';
import { relogRequestHandler } from '../../middleware/request-middleware';
import { Product } from '../../models';

const buildProductSearchQuery = (name: string) => {
  const query: any = {};
  if (name) {
    query.name = new RegExp(`.*${name}.*`, 'i');
  }
  return query;
};

const searchWrapper: RequestHandler = async (req, res): Promise<void> => {
  const { name = undefined } = req.query;

  const query = buildProductSearchQuery(name as string);
  const products: Product[] = await Product.find(query);
  res.send({ products });
};

export const searchProduct = relogRequestHandler(searchWrapper);
