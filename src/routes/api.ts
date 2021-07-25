import { Router } from "express";
import controllerEmployee from "../controllers/employee";
import controllerAuth from "../controllers/auth";

const router = Router();

router.get("/get-list-employee", controllerEmployee.getListEmployee);
router.post("/create-employee", controllerEmployee.createEmployee);

export = router;
