import {Response, Router} from "express";
import HttpClient from "../http-client/http-client";
import {Product, ProductsPage} from "../api/product";

const router = Router();
const httpClient = new HttpClient();

// Fetch all products from the dummy API
router.get("/", async (req, res: Response<Product[]>) => {
  const page = await httpClient.fetchJson<ProductsPage>("https://dummyjson.com/products");
  const products = page.products;
  res.send(products.filter(product => product.price > 1000));
});

export default router;