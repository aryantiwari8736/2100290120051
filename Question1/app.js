import express from "express";
import { ProductRouter } from "./routes/prodrout.js";
export const app = express();
import cors from 'cors'
app.use(cors());
app.use('/categories', ProductRouter);
app.all("*", (req,res,next) => {
    const err = new Error(`Route ${req.originalUrl} not found`) ;
    err.statusCode = 404;
    next(err);
  });