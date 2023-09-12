import api from './api';

const apiToDom = () => {
  async function callApi() {
    const searchBar = document.querySelector('.search-location');
    const searchData = searchBar.value;
    const locationDetails = await api.getLocationDetails(searchData);
    const currentWeather = await api.getCurrentWeather(searchData);
    const hourlyWeather = await api.getHourlyForecast(searchData);
    const forecastWeather = await api.getThreeDayForecast(searchData);

    return {
      locationDetails,
      currentWeather,
      hourlyWeather,
      forecastWeather,
    };
  }

  function populateLocationDetails(locationDetails) {
    const locationName = document.querySelector('.location-name');
    const dateTime = document.querySelector('.date-time');

    locationName.textContent = locationDetails.locationName;
    dateTime.textContent = locationDetails.displayDate;
  }

  function populateBasicWeather(currentWeather) {
    const icon = document.querySelector('.basic-weather-icon');
    const temperature = document.querySelector('.basic-temperature');
    const description = document.querySelector('.weather-description');
    const feelsLike = document.querySelector('.weather-feels-like');

    console.log(currentWeather.currentConditionIcon);
    icon.src = currentWeather.currentConditionIcon;
    icon.style.display = 'flex';
    // icon.style.backgroundImage = currentWeather.currentConditionIcon;
    temperature.textContent = `${currentWeather.currentTempC}°C`;
    description.textContent = currentWeather.currentCondition;
    feelsLike.textContent = `Feels Like ${currentWeather.feelsLikeC}°C`;
  }

  function populateDetailedWeather(currentWeather) {
    const dataItems = document.querySelectorAll('.data-item');
    const windSpeed = document.querySelector('.wind-speed');
    const humidity = document.querySelector('.humidity');
    const uvIndex = document.querySelector('.uv-index');
    const visibility = document.querySelector('.visibility');
    const rainfall = document.querySelector('.rainfall');
    const chanceOfRain = document.querySelector('.chance-of-rain');
    const sunrise = document.querySelector('.sunrise');
    const sunset = document.querySelector('.sunset');
    const moonPhase = document.querySelector('.moon-phase');

    dataItems.forEach((item) => {
      item.style.display = 'flex';
      item.style.flexDirection = 'column';
    });

    windSpeed.textContent = `${currentWeather.windSpeed}m/s`;
    humidity.textContent = `${currentWeather.humidity}%`;
    uvIndex.textContent = currentWeather.uvIndex;
    visibility.textContent = `${currentWeather.visibility}km`;
    rainfall.textContent = `${currentWeather.rainfallMillimeters}%`;
    chanceOfRain.textContent = `${currentWeather.chanceOfRain}%`;
    sunrise.textContent = currentWeather.sunrise;
    sunset.textContent = currentWeather.sunset;
    moonPhase.textContent = currentWeather.moonPhase;
  }

  async function populateDom() {
    const processedData = await callApi();
    const { locationDetails } = processedData;
    const { currentWeather } = processedData;
    const { hourlyWeather } = processedData;
    const { forecastWeather } = processedData;

    // console.log('details', locationDetails);
    // console.log('current', currentWeather);
    // console.log(hourlyWeather);
    // console.log('forecast', forecastWeather);

    populateLocationDetails(locationDetails);
    populateBasicWeather(currentWeather);
    populateDetailedWeather(currentWeather);
  }

  return { populateDom };
};

function setSearchEvents() {
  const searchBar = document.querySelector('.search-location');
  const searchIcon = document.querySelector('.search-icon');
  searchBar.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      apiToDom().populateDom();
    }
  });
  searchIcon.addEventListener('click', () => {
    apiToDom().populateDom();
  });
}

export default setSearchEvents;
