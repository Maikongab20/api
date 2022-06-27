import Router from "express";
import { ControllerEmployeer } from "./Controller/ControllerEmployer";
import { ControllerProduct } from "./Controller/ControllerProduct";
import { ControllerType } from "./Controller/ControllerType";

const router = Router();
const createEmployeer = new ControllerEmployeer();
const createType = new ControllerType();
const createProduct = new ControllerProduct();

router.post('/create', createEmployeer.ControllerCreateEmployeer);
router.post('/createType', createType.CreateTypeController);
router.post('/createProduct', createProduct.CreateProductController);

export { router }