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

    icon.src = currentWeather.currentConditionIcon;
    icon.style.display = 'flex';
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

  function initializeNavigationControls() {
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    const arrows = [arrowLeft, arrowRight];

    arrows.forEach((control) => {
      control.style.display = 'flex';
    });

    const dots = document.querySelectorAll('.dot');
    const dotOne = dots[0];
    const dotTwo = dots[1];
    const dotThree = dots[2];
    const dotFour = dots[3];

    dots.forEach((control) => {
      control.style.display = 'flex';
    });

    dotOne.style.filter = 'brightness(30%)';

    const blockOne = document.querySelector('.block-one');
    const blockTwo = document.querySelector('.block-two');
    const blockThree = document.querySelector('.block-three');
    const blockFour = document.querySelector('.block-four');

    blockOne.style.display = 'flex';

    arrowRight.addEventListener('click', () => {
      if (blockOne.style.display === 'flex') {
        blockOne.style.display = 'none';
        blockTwo.style.display = 'flex';
        dotOne.style.filter = 'brightness(100%)';
        dotTwo.style.filter = 'brightness(30%)';
      } else if (blockTwo.style.display === 'flex') {
        blockTwo.style.display = 'none';
        blockThree.style.display = 'flex';
        dotTwo.style.filter = 'brightness(100%)';
        dotThree.style.filter = 'brightness(30%)';
      } else if (blockThree.style.display === 'flex') {
        blockThree.style.display = 'none';
        blockFour.style.display = 'flex';
        dotThree.style.filter = 'brightness(100%)';
        dotFour.style.filter = 'brightness(30%)';
      }
    });

    arrowLeft.addEventListener('click', () => {
      if (blockFour.style.display === 'flex') {
        blockFour.style.display = 'none';
        blockThree.style.display = 'flex';
        dotFour.style.filter = 'brightness(100%)';
        dotThree.style.filter = 'brightness(30%)';
      } else if (blockThree.style.display === 'flex') {
        blockThree.style.display = 'none';
        blockTwo.style.display = 'flex';
        dotThree.style.filter = 'brightness(100%)';
        dotTwo.style.filter = 'brightness(30%)';
      } else if (blockTwo.style.display === 'flex') {
        blockTwo.style.display = 'none';
        blockOne.style.display = 'flex';
        dotTwo.style.filter = 'brightness(100%)';
        dotOne.style.filter = 'brightness(30%)';
      }
    });
  }

  function populateHourlyWeather(hourlyWeather) {
    const hourDivs = document.querySelectorAll('.hour');
    let i = 0;

    hourDivs.forEach((hourDiv) => {
      while (hourDiv.firstChild) {
        hourDiv.removeChild(hourDiv.firstChild);
      }
    });

    hourlyWeather.forEach((hour) => {
      const time = document.createElement('div');
      time.classList.add('hourly-time');
      time.textContent = hour.time;

      const tempC = document.createElement('div');
      tempC.classList.add('hourly-temp');
      tempC.textContent = `${hour.temp_c}°C`;

      const icon = document.createElement('img');
      tempC.classList.add('hourly-icon');
      icon.alt = 'Weather Icon';
      icon.src = hour.icon;

      const iconContainer = document.createElement('div');
      iconContainer.classList.add('icon-container');
      iconContainer.appendChild(icon);

      hourDivs[i].appendChild(time);
      hourDivs[i].appendChild(tempC);
      hourDivs[i].appendChild(iconContainer);
      i += 1;
    });

    initializeNavigationControls();
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
    populateHourlyWeather(hourlyWeather);
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
