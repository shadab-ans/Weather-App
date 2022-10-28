import React from "react";
import styled from "styled-components";

const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;

const ChooseCityLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 10px auto;
`;

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  border-radius: 5px;
  // color: white;
  font-size: 18px;
  // font-weight: bold;
  margin: 20px;

  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: 500;
    background: transparent;
  }

  & ::placeholder {
    color: #293446;
  }

  & button {
    padding: 0 10px;
    font-size: 14px;
    color: white;
    background: black;
    border: none;
    outline: none;
    border-radius: 0 5px 5px 0;
    font-weight: 500;
    cursor: pointer;
  }
`;

const City = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <WeatherLogo src={"icons/perfect-day.svg"} />
      <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="Enter the city"
        />
        <button type={"submit"}>Search</button>
      </SearchBox>
    </>
  );
};

export default City;
