import express, { Application, Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello the dashboard");
});

export default router;
