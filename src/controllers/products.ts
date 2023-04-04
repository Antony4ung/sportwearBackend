import { Request, Response } from "express";
import product from "../models/product";

export const getHomeProducts = async (req: Request, res: Response) => {
  try {
    const PAGE_SIZE = 8;
    const page = Number(req.query.page || "1");

    const category = req.query.category;

    let Products;
    let total;

    if (category) {
      total = await product.where({ category }).countDocuments({});

      Products = await product
        .find({ category })
        .skip(PAGE_SIZE * (page - 1))
        .limit(PAGE_SIZE)
        .populate("category");
    } else {
      total = await product.countDocuments({});
      Products = await product
        .find()
        .skip(PAGE_SIZE * (page - 1))
        .limit(PAGE_SIZE)
        .populate("category");
    }

    if (!Products) {
      res.status(404).json({ message: "product not found" });
    }

    // res.status(200).json(Products);

    res
      .status(200)
      .json({ totalPages: Math.ceil(total / PAGE_SIZE), Products });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const addProducts = async (req: Request, res: Response) => {
  try {
    const { name, description, photoUrl, category, price, inStock, rating } =
      req.body;

    const newProduct = new product({
      name,
      description,
      photoUrl,
      category,
      price,
      inStock,
      rating,
    });

    await newProduct.save();

    res.status(201).json({ message: "New product created", success: true });
    return;
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getProductDetails = async (req: Request, res: Response) => {
  try {

    const productId = req.params.productId

    const Product = await product
      .findById(productId)
      .populate("category");

    if (!Product) {
      res.status(404).json({ message: "product not found" });
    }

    // res.status(200).json(Products);

    res
      .status(200)
      .json(Product);
  } catch (error) {
    res.status(500).json(error);
  }
};

