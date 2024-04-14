import {
  Document, Model, Schema, model
} from 'mongoose';

export interface Product extends Document {
  name: string;
  price: number;
}

interface ProductModel extends Model<Product> { }

const schema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true }
});

export const Product: ProductModel = model<Product, ProductModel>('Product', schema);
