import React from 'react'
import useFetch from "react-fetch-hook";
import { Event } from "../models/event";
import { weatherApiKey } from '../utils/env';

export const WeatherStatus: React.FunctionComponent<{ event: Event }> = ({ event }) => {
  const { isLoading, data } = useFetch(`https://api.openweathermap.org/data/2.5/find?q=${event.location}&units=metric&appid=${weatherApiKey}`);
  if (isLoading) {
    return <>{"Loading..."}</>
  }
  const matches: any[] = (data as any).list
  if (matches.length === 0){
    return <>{"City could not be found"}</>
  }

  return <>{`${matches[0].weather[0].description}, ${matches[0].main.temp}°C`}</>
}