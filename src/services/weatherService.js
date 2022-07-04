import fetch from "node-fetch";


class WeatherService {
  async getWeatherForCity(city) { 
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0ad3df4030a233c298c8cf93b05395a7&lang=ru`;
    return await (await fetch(url)).json();
  }
}



export default new WeatherService();