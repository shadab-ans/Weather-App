import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import City from "./components/City";
import WeatherComponent from "./components/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 20px 10px;
  align-items: center;
  background-image: radial-gradient(
    circle farthest-corner at 6.6% 12%,
    rgb(10, 100, 218) 20.8%,
    rgb(254, 254, 37) 100.2%
  );
  backdrop-filter: blur(10px);
  box-shadow: 7px 7px 14px 5px rgba(37, 38, 39, 0.18);
  padding: 20px 10px;
  border-radius: 10px;
  width: 380px;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  text-shadow: 3px 3px 5px rgba(169, 203, 218, 0.8);
  font-size: 25px;
  font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d1d9bd1f5d1349d58283da4634a5613a`
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <City updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
