import './style.css';

function getDayName(dateStr, locale) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: 'long' });
}

async function fetchThreeDayForecast(location) {
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=595f8949c2a74450b66224031231408&q=${location}&days=5`);
  const fetchedData = await response.json();

  return fetchedData;
}

async function processCurrentData(fetchedData) {
  const currentWeather = fetchedData.current;
  const forecastArray = await fetchedData.forecast.forecastday;
  const todaysForecast = await forecastArray[0].day;
  const astroData = await forecastArray[0].astro;

  // console.log('current weather', currentWeather);
  // console.log('forecast data', forecastArray);
  // console.log('todays forecast', todaysForecast);
  // console.log('astro data', astroData);

  const currentCondition = currentWeather.condition.text;
  const currentConditionIcon = currentWeather.condition.icon;
  const forecastCondition = todaysForecast.condition.text;
  const forecastConditionIcon = todaysForecast.condition.icon;
  const locationName = fetchedData.location.name;
  const dateTime = currentWeather.last_updated.split(' ');
  const date = dateTime[0];
  const time = dateTime[1];
  const { sunrise } = astroData;
  const { sunset } = astroData;
  const moonPhase = astroData.moon_phase;
  const currentTempC = currentWeather.temp_c;
  const currentTempF = currentWeather.temp_f;
  const { humidity } = currentWeather;
  const feelsLikeC = currentWeather.feelslike_c;
  const feelsLikeF = currentWeather.feelslike_f;
  const precipation = currentWeather.precip_in;
  const windSpeed = currentWeather.wind_kph;
  const uvIndex = currentWeather.uv;

  return {
    currentCondition,
    currentConditionIcon,
    forecastCondition,
    forecastConditionIcon,
    locationName,
    date,
    time,
    sunrise,
    sunset,
    moonPhase,
    currentTempC,
    currentTempF,
    humidity,
    feelsLikeC,
    feelsLikeF,
    precipation,
    windSpeed,
    uvIndex,
  };
}

async function processThreeDayForecast(fetchedData) {
  const forecastArray = await fetchedData.forecast.forecastday;
  // console.log('forecast data', forecastArray);

  const dayOne = {};
  const dayTwo = {};
  const dayThree = {};
  const threeDayForecast = [dayOne, dayTwo, dayThree];
  let i = 0;

  threeDayForecast.forEach((day) => {
    const currentWeather = forecastArray[i].day;
    const { date } = forecastArray[i];
    day.dayName = getDayName(date, 'en-US');
    day.icon = currentWeather.condition.icon;
    day.maxTempC = currentWeather.maxtemp_c;
    day.minTempC = currentWeather.mintemp_c;
    day.maxTempF = currentWeather.maxtemp_f;
    day.minTempF = currentWeather.mintemp_f;
    i += 1;
  });

  return threeDayForecast;
}

const fetchedData = await fetchThreeDayForecast('Adelaide');
const currentWeather = await processCurrentData(fetchedData);
console.log('processed current weather', currentWeather);

const threeDayForecast = await processThreeDayForecast(fetchedData);

console.log('processed three day forecast', threeDayForecast);
