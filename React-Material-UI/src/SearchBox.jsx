import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox() {
  let [city, setCity] = useState("");
  const API_KEY = "4438793db9d9a10301ce5e56edbae7e9";

  async function getWeatherData() {
    const geoResponse = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
    );
    const [{ lat, lon }] = await geoResponse.json();
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const result = await weatherResponse.json();

    let weatherInfo = {
      city: result.name,
      temp: result.main.temp,
      maxTemp: result.main.temp_max,
      minTemp: result.main.temp_min,
      feelsLike: result.main.feels_like,
      humidity: result.main.humidity,
      description: result.weather[0].main,
    };
    console.log(weatherInfo);
  }

  function handleChange(e) {
    setCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getWeatherData();
    setCity("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="h-50 md:w-1/4 flex flex-col justify-center items-center gap-7 px-3 sm:w-1/4"
    >
      <TextField
        className="w-full text-white"
        label="City Name"
        id="city"
        value={city}
        onChange={handleChange}
        required
      />
      <Button className="w-1/3" variant="contained" type="submit">
        Search
      </Button>
    </form>
  );
}
