import express, { } from "express";
import { favProductAddREm, getUserData,remFav } from "../controllers/user";

const router = express.Router();

router.post("/:userID/fav/:favID", favProductAddREm);

router.delete("/:userID/fav/:favID",remFav)

router.get('/:userID', getUserData)

export default router;
