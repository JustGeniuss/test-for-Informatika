import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import { router } from "./routes/router.js";

const app = express();
app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
