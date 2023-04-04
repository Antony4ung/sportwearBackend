import { Request, Response } from "express";
import mongoose from "mongoose";
import user from "../models/user";

export const favProductAddREm = async (req: Request, res: Response) => {
  try {
    const { userID, favID } = req.params;

    const userFound = await user
      .findById(userID)
      .select("favProducts orderHistory _id phoneNumber");

    if (!userFound) {
      res.status(404).json("User not found with this ID");
      return;
    }

    // console.log(userFound);

    const found = userFound.favProducts.toString().includes(favID);

    console.log(found);

    if (found) {
      const index = userFound.favProducts.findIndex(
        (i) => i.toString() === favID
      );
      // console.log(index);
      userFound.favProducts.splice(index, 1);
    } else {
      userFound.favProducts.push(new mongoose.Types.ObjectId(favID));
    }

    const saved = await (await userFound.save()).populate("favProducts");

    res.status(200).send(saved);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const remFav = async (req: Request, res: Response) => {
  try {
  const { userID, favID } = req.params;

  const userFound = await user
    .findById(userID)
    .select("favProducts orderHistory _id phoneNumber")

  if (!userFound) {
    res.status(404).json("User not found with this ID");
    return;
  }

  const found = userFound.favProducts.toString().includes(favID);


  if (found) {
    const index = userFound.favProducts.findIndex(
        (i) => i.toString() === favID
      );
      // console.log(index);
      userFound.favProducts.splice(index, 1);
  }

  const saved = await (await userFound.save()).populate("favProducts");

  res.status(200).send(saved);
  } catch (error) {
      res.status(500).json(error);
  }
};

export const getUserData = async (req: Request, res: Response) => {
  // try {

  const { userID } = req.params;

  const userF = await user
    .findById(userID)
    .select("favProducts orderHistory _id phoneNumber")
    .populate("favProducts");

  if (!userF) {
    res.status(404).json("User not found");
    return;
  }

  res.status(200).json(userF);

  // } catch (error) {
  //     res.status(500).json(error);
  // }
};
