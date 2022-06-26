import Router from "express";
import { ControllerEmployeer } from "./Controller/ControllerEmployer";

const router = Router();
const createEmployeer = new ControllerEmployeer();

router.post('/create', createEmployeer.ControllerCreateEmployeer);



export { router }