import { RequestHandler } from "express";
import { relogRequestHandler } from "../../middleware/request-middleware";
import { Order, Role } from "../../models";

const allWrapper: RequestHandler = async (req, res): Promise<void> => {
  const ordersWithDetails = await Order.find({});

  res.status(200).json(ordersWithDetails);
};

export const allOrder = relogRequestHandler(allWrapper, {
  validation: { checkAdminRole: true },
});
