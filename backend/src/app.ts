import bodyParser from "body-parser";
import compression from "compression";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { ApplicationError } from "./errors";
import { router } from "./routes";

export const app = express();

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("port", 8000);

app.use("/api", router);

app.use(
  (err: ApplicationError, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) {
      return next(err);
    }

    return res.status(err.status || 500).json({
      error: process.env.NODE_ENV === "development" ? err : undefined,
      message: err.message,
    });
  }
);
