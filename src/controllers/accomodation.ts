import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Accomodation from "../models/accomodation";

const createAccomodation = (
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
        data: accomodation.id,
      });
    })
    .catch((error: Error) => {
      return res.status(500).json({
        data: error.message,
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
        data: accomodation,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        data: error.message,
        error,
      });
    });
};

const getAccomodationsDetail = (req: Request, res: Response, next: NextFunction) => {
  const id = req.query.id;
  Accomodation.findById(id)
    .exec()
    .then((item) => {
      if (item) {
        return res.status(200).json({
          code: 200,
          data: item,
        });
      }
      return res.status(500).json({
        code: 500,
        data: "Not found",
      });
    })
    .catch((error) => {
      return res.status(500).json({
        data: error.message,
        error,
      });
    });
};

const updateAccomodation = (req: Request, res: Response, next: NextFunction) => {
  const id = req.body.id;
  Accomodation.findOneAndUpdate({"_id": id}, req.body)
    .then((item) => {
      if (item) {
        return res.status(200).json({
          code: 200,
          data: "Success",
        });
      } else {
        return res.status(500).json({
          code: 500,
          data: "Not found",
        });
      }
    })
    .catch((error) => {
      return res.status(500).json({
        data: error.message,
        error,
      });
    })
}

const deleteAccommodation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.body.id;
  Accomodation.findByIdAndDelete(id)
    .exec()
    .then((item) => {
      if (item) {
        return res.status(200).json({
          code: 200,
          data: "success",
        });
      }
      return res.status(500).json({
        code: 500,
        data: "Not found",
      });
    })
    .catch((error) => {
      return res.status(500).json({
        data: error.message,
        error,
      });
    });
};

export default {
  createAccomodation,
  getAccomodations,
  getAccomodationsDetail,
  deleteAccommodation,
  updateAccomodation
};
