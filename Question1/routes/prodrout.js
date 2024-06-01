import express from 'express';
import { GetProdById, GetAllProduct } from '../controller/getProducts.js';
export const ProductRouter = express.Router();
ProductRouter.get('/:categoryname/products',GetAllProduct);
ProductRouter.get('/:categoryname/products/:productid',GetProdById);

