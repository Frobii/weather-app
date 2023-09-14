const api = (() => {
  function getDayName(dateStr, locale) {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });
  }

  function getMonthName(dateStr) {
    const date = new Date(dateStr);
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return month[date.getMonth()];
  }

  async function fetchThreeDayForecast(location) {
    const apiKey = '595f8949c2a74450b66224031231408';
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=5`);
    const fetchedData = await response.json();

    return fetchedData;
  }

  async function getLocationDetails(location) {
    const fetchedData = await fetchThreeDayForecast(location);
    const currentWeather = fetchedData.current;

    const locationName = `${fetchedData.location.name}, ${fetchedData.location.country}`;
    const dateTime = currentWeather.last_updated.split(' ');
    const date = dateTime[0];
    const time = dateTime[1];
    const dayName = getDayName(date, 'en-US');
    const monthName = getMonthName(date);
    const year = date.substring(0, 4);
    const day = date.substring(8, 10);

    const displayDate = `${dayName} ${day} ${monthName} ${year} | ${time}`;

    return {
      locationName,
      displayDate,
    };
  }

  async function getCurrentWeather(location) {
    const fetchedData = await fetchThreeDayForecast(location);
    // console.log('fetched', fetchedData);

    const currentWeather = fetchedData.current;
    const forecastArray = await fetchedData.forecast.forecastday;
    const todaysForecast = await forecastArray[0].day;
    const astroData = await forecastArray[0].astro;

    // console.log('current', currentWeather);
    // console.log('forecast', todaysForecast);
    // console.log('astro', astroData);

    const currentCondition = currentWeather.condition.text;
    const currentConditionIcon = currentWeather.condition.icon;
    const forecastCondition = todaysForecast.condition.text;
    const forecastConditionIcon = todaysForecast.condition.icon;
    const { sunrise } = astroData;
    const { sunset } = astroData;
    const moonPhase = astroData.moon_phase;
    const currentTempC = currentWeather.temp_c;
    const currentTempF = currentWeather.temp_f;
    const { humidity } = currentWeather;
    const feelsLikeC = currentWeather.feelslike_c;
    const feelsLikeF = currentWeather.feelslike_f;
    const rainfallMillimeters = todaysForecast.totalprecip_mm;
    const chanceOfRain = todaysForecast.daily_chance_of_rain;
    const windSpeed = currentWeather.wind_kph;
    const visibility = currentWeather.vis_km;
    const uvIndex = currentWeather.uv;

    return {
      currentCondition,
      currentConditionIcon,
      forecastCondition,
      forecastConditionIcon,
      sunrise,
      sunset,
      moonPhase,
      currentTempC,
      currentTempF,
      humidity,
      feelsLikeC,
      feelsLikeF,
      rainfallMillimeters,
      chanceOfRain,
      windSpeed,
      visibility,
      uvIndex,
    };
  }

  function getCurrentTime(fetchedData) {
    const currentWeather = fetchedData.current;

    const dateTime = currentWeather.last_updated.split(' ');
    const currentTime = dateTime[1];

    return currentTime;
  }

  async function getHourlyForecast(location) {
    const fetchedData = await fetchThreeDayForecast(location);
    const forecastArray = await fetchedData.forecast.forecastday;
    const hourlyDataToday = await forecastArray[0].hour;
    const hourlyDataTomorrow = await forecastArray[1].hour;
    const currentTime = getCurrentTime(fetchedData);
    const currentTimeRoundDown = `${currentTime.substring(0, 3)}00`;
    const processed48Hours = [];
    const next24Hours = [];

    hourlyDataToday.forEach((hour) => {
      const hourObject = {};

      hourObject.temp_c = hour.temp_c;
      const dateTime = hour.time.split(' ');
      hourObject.time = dateTime[1];
      hourObject.icon = hour.condition.icon;

      processed48Hours.push(hourObject);
    });

    hourlyDataTomorrow.forEach((hour) => {
      const hourObject = {};

      hourObject.temp_c = hour.temp_c;
      const dateTime = hour.time.split(' ');
      hourObject.time = dateTime[1];
      hourObject.icon = hour.condition.icon;

      processed48Hours.push(hourObject);
    });

    for (let i = 0; i < 24; i += 1) {
      if (processed48Hours[i].time === currentTimeRoundDown) {
        for (let j = i; j < (i + 24); j += 1) {
          next24Hours.push(processed48Hours[j]);
        }
        break;
      }
    }

    return next24Hours;
  }

  async function getThreeDayForecast(location) {
    const fetchedData = await fetchThreeDayForecast(location);
    const forecastArray = await fetchedData.forecast.forecastday;

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

  return {
    getLocationDetails,
    getCurrentWeather,
    getHourlyForecast,
    getThreeDayForecast,
  };
})();

export default api;
