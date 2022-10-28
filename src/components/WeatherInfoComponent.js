import React from "react";
import styled from 'styled-components';
import { WeatherIcons } from "../App";

export const WeatherInfoIcons = {
    sunset: "/icons/temp.svg",
    sunrise: "/icons/temp.svg",
    humidity: "/icons/humidity.svg",
    wind: "/icons/wind.svg",
    pressure: "/icons/pressure.svg",
};

const WeatherContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin: 13px auto;
`;

const Condition = styled.span`
    margin: 20px auto;
    text-transform: capitalize;
    font-size: 14px;

    & span {
        font-size: 28px;
    }
`;

const WeatherIcon = styled.img`
    width: 100px;
    height: 100px;
    margin: 5px auto;
`;

const Location = styled.span`
    margin: 15px auto;
    font-size: 28px;
    font-weight: bold;
`;

const WeatherInfoLabel = styled.span`
    font-size: 14px;
    font-weight: bold;
    margin: 20px 25px 10px;
    text-align: start;
    width: 90%;
`;

const WeatherInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width:90%;
    justify-content: space-evenly;
    align-items: center;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5px 10px;
    justify-content: space-evenly;
    align-items: center;
`;

const InfoIcon = styled.img`
    width: 36px;
    height: 36px;
`;

const InfoLabel = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin: 15px;

    & span {
        font-size: 12px;
        text-transform: capitalize;
    }
`;

const WeatherInfoComponent = (props) => {
    const { name, value } = props;
    return (
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]}/>
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    );
};

const WeatherComponent =(props) => {
    const {weather} = props;
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <>
            <WeatherContainer>
                <Condition>
                    <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                    {` | ${weather?.weather[0].description}`}
                </Condition>
                <WeatherIcon src={WeatherIcons[weather?.weather[0].icon]} />
            </WeatherContainer>
            <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
            
            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"} 
                                      value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`} />
                <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity} />
                <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed} />
                <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure} />
            </WeatherInfoContainer>
        </>
    );
};

export default WeatherComponent;