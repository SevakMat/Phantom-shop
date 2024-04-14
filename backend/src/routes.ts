import { Router } from 'express';

import {
  addProduct, allProduct, searchProduct, updateProduct
} from './controllers/product';
import { allUser } from './controllers/user';
import { login, register } from './controllers/auth';
import { addOrder } from './controllers/order';

export const router = Router();

router.post('/login', login);
router.post('/register', register);

router.post('/product/add', addProduct);
router.get('/product/all', allProduct);
router.get('/product/search', searchProduct);
router.patch('/product/update', updateProduct);

router.post('/order/add', addOrder);

router.get('/user/all', allUser);
