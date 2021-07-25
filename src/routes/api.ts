import { Router } from "express";
import controllerAccomodation from "../controllers/accomodation";
import controllerAuth from "../controllers/auth";

const router = Router();

//Accomodation
router.get("/get-accomodations", controllerAccomodation.getAccomodations);
router.post("/create-accomodation", controllerAccomodation.createAccomodation);
router.get("/get-accomodation-detail", controllerAccomodation.getAccomodationsDetail);
router.post("/delete-accomodation", controllerAccomodation.deleteAccommodation);
router.post("/update-accomodation", controllerAccomodation.updateAccomodation);

export = router
