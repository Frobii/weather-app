import api from './api';

const apiToDom = () => {
  async function callApi() {
    const searchBar = document.querySelector('.search-location');
    const searchData = searchBar.value;
    const currentWeather = await api.getCurrentWeather(searchData);
    const forecastWeather = await api.getThreeDayForecast(searchData);

    return {
      currentWeather,
      forecastWeather,
    };
  }

  function populateBasicWeather(currentWeather) {
    const icon = document.querySelector('.weather-icon');
    const temperature = document.querySelector('.temperature');
    const description = document.querySelector('.weather-description');
    const feelsLike = document.querySelector('.weather-feels-like');

    icon.style.backgroundImage = currentWeather.currentConditionIcon;
    temperature.textContent = currentWeather.currentTempC;
    description.textContent = currentWeather.currentCondition;
    feelsLike.textContent = currentWeather.feelsLikeC;
  }

  async function populateDom() {
    const processedData = await callApi();
    const { currentWeather } = processedData;

    populateBasicWeather(currentWeather);
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
