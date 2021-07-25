import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Accomodation from "../models/accomodation";

const createAccomodation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { name, address, price, category, image, description } = req.body;

  const accomodation = new Accomodation({
    _id: new mongoose.Types.ObjectId(),
    name,
    address,
    price,
    category,
    image,
    description,
  });

  return accomodation
    .save()
    .then((result: any) => {
      return res.status(200).json({
        code: 200,
        message: accomodation.id,
      });
    })
    .catch((error: Error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

const getAccomodations = (req: Request, res: Response, next: NextFunction) => {
  Accomodation.find()
    .exec()
    .then((accomodation) => {
      return res.status(200).json({
        code: 200,
        message: accomodation,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

export default { createAccomodation, getAccomodations };
