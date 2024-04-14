import { RequestHandler } from "express";
import { relogRequestHandler } from "../../middleware/request-middleware";
import { Order, Role } from "../../models";

const allWrapper: RequestHandler = async (req, res): Promise<void> => {
  const ordersWithDetails = await Order.find({});

  // const formattedOrders = ordersWithDetails.map(order => ({
  //     userName: `${order.user.firstName} ${order.user.lastName}`,
  //     productName: order.products.map(product => product.name),
  //     productPrice: order.products.map(product => product.price),
  //     orderDate: order.date
  // }));
  res.status(200).json(ordersWithDetails);
};

export const allOrder = relogRequestHandler(allWrapper, {
  validation: { checkAdminRole: true },
});
