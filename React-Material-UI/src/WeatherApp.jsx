import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  let [weather, setWeather] = useState({
    city: "New York",
    temp: 25,
    maxTemp: 28,
    minTemp: 22,
    feelsLike: 26,
    humidity: 60,
    description: "Clear",
  });

  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center text-5xl font-bold font-sans text-red-950">
        <h1>Weather App</h1>
        <SearchBox />
        <InfoBox weather={weather} />
      </div>
    </>
  );
}
