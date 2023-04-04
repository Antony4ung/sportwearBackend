import { Request, Response } from "express";

export const getAllOrders = (req: Request, res: Response) => {
  try {
    res.send("Home products");
  } catch (error) {
    res.json(error);
  }
};

export const getUserOrders = (req: Request, res: Response) => {
  try {
    res.send("Home products added");
  } catch (error) {
    res.json(error);
  }
};

export const getOrdersById = (req: Request, res: Response) => {
  try {
    res.send("Home products added");
  } catch (error) {
    res.json(error);
  }
};

export const postOrder = (req: Request, res: Response) => {
  try {
    res.send("Home products added");
  } catch (error) {
    res.json(error);
  }
};

export const deleteOrder = (req: Request, res: Response) => {
  try {
    res.send("Home products added");
  } catch (error) {
    res.json(error);
  }
};

export const editOrder = (req: Request, res: Response) => {
    try {
      res.send("Home products added");
    } catch (error) {
      res.json(error);
    }
  };
