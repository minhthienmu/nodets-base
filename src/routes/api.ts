import { Router } from "express";
import controllerEmployee from "../controllers/employee";
import controllerAccomodation from "../controllers/accomodation";
import controllerAuth from "../controllers/auth";

const router = Router();

router.get("/get-list-employee", controllerEmployee.getListEmployee);
router.post("/create-employee", controllerEmployee.createEmployee);
router.get("/get-accomodations", controllerAccomodation.getAccomodations);
router.post("/create-accomodation", controllerAccomodation.createAccomodation);


export = router;
