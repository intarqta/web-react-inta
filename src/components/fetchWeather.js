import axios from "axios";

const fetchWeather = async ({lon, lat}) => {
      const API_KEY =  process.env.REACT_APP_WEATHER_API; 
      const API_URL = "https://api.openweathermap.org/data/2.5/find?";
      const params = {
        lat: lat,
        lon: lon,
        cnt: 1,
        units: "metric",
        lang: "en",
        appid: API_KEY,
      };  
      try {
        const response = await axios.get(API_URL, { params });
        return response.data.list;
      } catch (error) {
        console.error("Error en la solicitud de datos:", error);
      }
}

export default fetchWeather;