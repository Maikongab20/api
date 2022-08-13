import Router from "express";
import { ControllerEmployeer } from "./Controller/ControllerEmployer";
import { ControllerProduct } from "./Controller/ControllerProduct";
import { ControllerType } from "./Controller/ControllerType";
import { ControllerLogin } from "./Controller/ControllerLogin"

const router = Router();
const createEmployeer = new ControllerEmployeer();
const createType = new ControllerType();
const createProduct = new ControllerProduct();
const authenticateLogin = new ControllerLogin();

//create
router.post('/create', createEmployeer.ControllerCreateEmployeer);
router.post('/createType', createType.CreateTypeController);
router.post('/createProduct', createProduct.CreateProductController);

/// authenticate
router.get('/login', authenticateLogin.CreateLogin);

export { router }