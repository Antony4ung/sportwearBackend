import { Request, Response } from "express";
import category from "../models/category";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await category.find();

    if (!categories) {
      res.status(404).json({ message: "category not found" });
    }

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const addCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const newCategory = new category({
      name,
    });

    await newCategory.save();

    res.status(201).json({ message: "New category created", success: true });
    return;
  } catch (error) {
    res.status(500).json(error);
  }
};
