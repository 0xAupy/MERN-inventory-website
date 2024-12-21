import express from "express";
import { getProducts, createProduct, deleteProduct, updateProduct } from "../controllers/product.controller.js";
const router = express.Router();

//show all products
router.get("/", getProducts);

//create a product
router.post("/", createProduct);

//delete a product
router.delete("/:id", deleteProduct);

//update product
router.put("/:id", updateProduct);

export default router;