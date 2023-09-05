import './style.css';

async function fetchThreeDayForecast(location) {
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=595f8949c2a74450b66224031231408&q=${location}&days=5`);
  const fetchedData = await response.json();

  return fetchedData;
}

async function processLocationData(fetchedData) {
  const currentWeather = fetchedData.current;
  const forecastArray = await fetchedData.forecast.forecastday;
  const todaysForecast = await forecastArray[0].day;

  console.log('current weather', currentWeather);
  console.log('forecast data', forecastArray);
  console.log('todays forecast', todaysForecast);

  const currentCondition = currentWeather.condition.text;
  const currentConditionIcon = currentWeather.condition.icon;
  const forecastCondition = todaysForecast.condition.text;
  const forecastConditionIcon = todaysForecast.condition.icon;
  const locationName = fetchedData.location.name;
  const dateTime = currentWeather.last_updated.split(' ');
  const date = dateTime[0];
  const time = dateTime[1];
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

const fetchedData = await fetchThreeDayForecast('Adelaide');
const processedData = await processLocationData(fetchedData);

// console.log(fetchedData);
console.log('processed current weather', processedData);
