import { RequestHandler } from 'express';
import { relogRequestHandler } from '../../middleware/request-middleware';
import { User } from '../../models';

const allWrapper: RequestHandler = async (req, res) => {
  const users = await User.find();
  res.send({ users });
};

export const allUser = relogRequestHandler(allWrapper);
