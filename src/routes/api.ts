import { Router } from "express";
import controllerAccomodation from "../controllers/accomodation";
import controllerUser from "../controllers/user";

const router = Router();

//Accomodation
router.get("/get-accomodations", controllerAccomodation.getAccomodations);
router.post("/create-accomodation", controllerUser.CheckAuth, controllerAccomodation.createAccomodation);
router.get("/get-accomodation-detail", controllerAccomodation.getAccomodationsDetail);
router.post("/delete-accomodation", controllerUser.CheckAuth, controllerAccomodation.deleteAccommodation);
router.post("/update-accomodation", controllerUser.CheckAuth, controllerAccomodation.updateAccomodation);
router.post("/filter-accomodation", controllerAccomodation.filterAccomodation);

//Contact
//router.post("/get-nofications", controllerUser.CheckAuth, controllerContact.getNofications);
//router.post("/list-contact", controllerUser.CheckAuth, controllerContact.getListContact);
//router.post("/send-contact", controllerUser.CheckAuth, controllerContact.sendContact);

export = router
