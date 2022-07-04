import express from "express";
import WeatherController from "../controllers/weatherController.js";

const router = express.Router();

router.get("/weather", WeatherController.getWeatherForCity);

export { router };
