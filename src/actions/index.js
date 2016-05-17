import axios from 'axios';

const API_KEY = '05151629c2fb41e60b810ba018b56cf4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}&mode=json`
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
  const url = `${ROOT_URL}&q=${city},se`
  const request = axios.get(url)
  console.log(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}