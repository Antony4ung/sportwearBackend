import express, { Application, Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello the orders");
});

export default router;
