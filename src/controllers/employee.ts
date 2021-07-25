import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Employee from "../models/employee";

const createEmployee =  (req: Request, res: Response, next: NextFunction) => {
  let { name, age } = req.body;

  const employee = new Employee({
    _id: new mongoose.Types.ObjectId(),
    name,
    age,
  });

  return employee
    .save()
    .then((result: any) => {
      return res.status(200).json({
        employee: result,
      });
    })
    .catch((error: Error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

const getListEmployee = (req: Request, res: Response, next: NextFunction) => {
  Employee.find()
    .exec()
    .then((employee) => {
      return res.status(200).json({
        employee: employee,
        count: employee.length,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

export default { createEmployee, getListEmployee };
