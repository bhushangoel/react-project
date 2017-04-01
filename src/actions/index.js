import axios from 'axios';

const API_KEY = 'c681292f2ef4038b1ba9fa5b7bbb5cf1';
const ROOT_URL = `http://api.openweathermap.org//data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},in`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}