import './style.css';

async function fetchLocationData(location) {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=595f8949c2a74450b66224031231408 &q=${location}&aqi=no`);
  const fetchedData = await response.json();

  return fetchedData;
}

async function processLocationData(fetchedData) {
  const currentData = fetchedData.current;
  const locationData = fetchedData.location;

  const description = currentData.condition.text;
  const locationName = locationData.name;
  const dateTime = currentData.last_updated.split(' ');
  const date = dateTime[0];
  const time = dateTime[1];
  const currentTempC = currentData.temp_c;
  const currentTempF = currentData.temp_f;
  const { humidity } = currentData;
  const feelsLikeC = currentData.feelslike_c;
  const feelsLikeF = currentData.feelslike_f;
  // const chanceOfRain =
  const windSpeed = currentData.wind_kph;
  // const sunrise = currentData.
  // const sunset = currentData.
  const uvIndex = currentData.uv;
  return {
    description,
    locationName,
    date,
    time,
    currentTempC,
    currentTempF,
    humidity,
    feelsLikeC,
    feelsLikeF,
    windSpeed,
    uvIndex,
  };
}

const fetchedData = await fetchLocationData('Atlantis');
const processedData = await processLocationData(fetchedData);

console.log(fetchedData);
console.log(processedData);
