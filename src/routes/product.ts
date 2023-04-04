import express from "express";
import { getHomeProducts, addProducts, getProductDetails } from "../controllers/products";

const router = express.Router();

router.get("/", getHomeProducts);

router.get("/:productId", getProductDetails)

router.post("/", addProducts);



export default router;
