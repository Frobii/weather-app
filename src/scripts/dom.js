import api from './api.js';

export default async function test() {
  const currentWeather = await api.getCurrentWeather('Adelaide');
  console.log('processed current weather', currentWeather);

  const threeDayForecast = await api.getThreeDayForecast('Adelaide');
  console.log('processed three day forecast', threeDayForecast);
}
