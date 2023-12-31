import api from './api';

const apiToDom = () => {
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
    icon.src = `https:${currentWeather.currentConditionIcon}`;
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

  function showNavControls() {
    const navControls = document.querySelector('.navigation-controls');
    navControls.style.display = 'flex';
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
      icon.src = `https:${hour.icon}`;

      const iconContainer = document.createElement('div');
      iconContainer.classList.add('icon-container');
      iconContainer.appendChild(icon);

      hourDivs[i].appendChild(time);
      hourDivs[i].appendChild(tempC);
      hourDivs[i].appendChild(iconContainer);
      i += 1;
    });

    showNavControls();
  }

  function populateWeeklyWeather(forecastWeather) {
    const forecastContainer = document.querySelector('.daily-forecast');
    forecastContainer.style.display = 'flex';
    const dayOne = document.querySelector('.day-one');
    const dayTwo = document.querySelector('.day-two');
    const dayThree = document.querySelector('.day-three');
    const days = [dayOne, dayTwo, dayThree];
    let i = 0;

    days.forEach((day) => {
      while (day.firstChild) {
        day.removeChild(day.firstChild);
      }
    });

    forecastWeather.forEach((day) => {
      const dayName = document.createElement('div');
      dayName.classList.add('day-name');
      const dayMax = document.createElement('div');
      dayMax.classList.add('day-max');
      const dayMin = document.createElement('div');
      dayMin.classList.add('day-min');
      const dayIcon = document.createElement('img');
      dayIcon.classList.add('day-icon');
      const iconContainer = document.createElement('div');
      iconContainer.classList.add('icon-container');
      iconContainer.appendChild(dayIcon);

      dayName.textContent = day.dayName;
      dayIcon.src = `https:${day.icon}`;
      dayIcon.alt = 'Weather Icon';
      dayMax.textContent = `${day.maxTempC}°C`;
      dayMin.textContent = `${day.minTempC}°C`;

      days[i].appendChild(dayName);
      days[i].appendChild(dayIcon);
      days[i].appendChild(dayMax);
      days[i].appendChild(dayMin);

      i += 1;
    });
  }

  async function populateDom(searchData) {
    try {
      const processedWeather = await api.getProcessedWeatherData(searchData);

      if (!processedWeather) {
        return;
      }

      const { locationDetails } = processedWeather;
      const { currentWeather } = processedWeather;
      const { hourlyWeather } = processedWeather;
      const { threeDayForecast } = processedWeather;

      // console.log('details', locationDetails);
      // console.log('current', currentWeather);
      // console.log('hourly', hourlyWeather);
      // console.log('forecast', forecastWeather);

      populateLocationDetails(locationDetails);
      populateBasicWeather(currentWeather);
      populateDetailedWeather(currentWeather);
      populateHourlyWeather(hourlyWeather);
      populateWeeklyWeather(threeDayForecast);
    } catch (error) {
      console.error(error);
    }
  }

  return { populateDom };
};

const controls = () => {
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

  function setSearchEvents() {
    const searchBar = document.querySelector('.search-location');
    const searchIcon = document.querySelector('.search-icon');

    searchBar.addEventListener('keydown', (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        const searchBar = document.querySelector('.search-location');
        const searchData = searchBar.value;
        apiToDom().populateDom(searchData);
      }
    });
    searchIcon.addEventListener('click', () => {
      const searchBar = document.querySelector('.search-location');
      const searchData = searchBar.value;
      apiToDom().populateDom(searchData);
    });
  }

  function initializeControls() {
    initializeNavigationControls();
    setSearchEvents();
  }

  return {
    initializeControls,
  };
};

export {
  controls,
  apiToDom,
};
