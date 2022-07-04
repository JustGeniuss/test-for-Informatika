import weatherService from "../services/weatherService.js";


class WeatherController {
  async getWeatherForCity(req, res, next) {
    try {
      const city = req.query.city || 'Ivanovo';
      const weather = await weatherService.getWeatherForCity(city);
      res.json(weather);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new WeatherController();
