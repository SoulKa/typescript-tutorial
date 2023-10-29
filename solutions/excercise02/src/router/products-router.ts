import {Response, Router} from "express";
import HttpClient from "../http-client/http-client";
import {Product, ProductsPage} from "../api/product";

const router = Router();
const httpClient = new HttpClient();

router.get("/", async (req, res: Response<Product[]>) => {
  const page = await httpClient.fetchJson<ProductsPage>("https://dummyjson.com/products");
  const products = page.products;
  res.send(products);
});