import { Document, Model, Schema, model } from "mongoose";
import { Product } from "./Product";

export interface Order extends Document {
  user: string;
  products: Product[];
  totalAmount: number;
  date: Date;
}

interface OrderModel extends Model<Order> {}

const orderSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  products: [{ type: Schema.Types.ObjectId, ref: "Product", required: true }],
  totalAmount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

export const Order: OrderModel = model<Order, OrderModel>("Order", orderSchema);
