import express from "express";
import PersonController from "../controller/person.js";

const router = express.Router();

router.get('/create-table', PersonController.createTable);
router.post('/create-person', PersonController.createPerson);

export default router;