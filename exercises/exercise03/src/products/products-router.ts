import {Response, Router} from "express";
import {Product} from "../api/product";

const router = Router();

// Fetch all products from the dummy API
router.get("/", (req, res: Response<Product[]>) => {
  // TODO (Bonus): call httpClient.fetchJson("https://dummyjson.com/products") that returns a parsed ProductsPage as type
  // TODO (Bonus): send the products property of the ProductsPage as response
  res.send("NOT IMPLEMENTED" as any);
});

export default router;