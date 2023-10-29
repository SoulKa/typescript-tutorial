import express from "express"
import pingRouter from "./src/router/ping-router";

const app = express();
let port = 8080;

app.use(express.json()); // for automatic JSON parsing
app.use("/ping", pingRouter); // register ping router under /ping

app.listen(port, () => console.log(`Server running on port ${port}`));