export function weatherApi(element) {

  //Api key  
const apiKey = '1ad067633ecd428c80a173928232106';


const getWeatherData = async (location) => {
  element.innerHTML = '';

  try {
    
    //API response
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
    const data = await response.json();
    console.log(data);

    // Display weather information
    const cityName = data.location.name;
    const lat = data.location.lat;
    const lon = data.location.lon;
    const temperature = data.current.temp_c;
    const feelslike = data.current.feelslike_c;
    const description = data.current.condition.text;
    const icon = data.current.condition.icon;
    const humidity = data.current.humidity;
    const wind = data.current.wind_kph;
    const vis = data.current.vis_km;
    

    const weatherDisplay = `
      <h3 style="color:#be34fc">${cityName}</h3>
      <p>latitude: <strong style="color:#6ea7fd">${lat}</strong></p>
      <p>longitude: <strong style="color:#6ea7fd">${lon}</strong></p>
      <p>Temperature: <strong style="color:#6ea7fd">${temperature}°C</strong></p>
      <p>Feels like: <strong style="color:#6ea7fd">${feelslike}°C</strong></p>
      <p style="display: flex;
      align-items: center;
      justify-content: center; gap:5px;" >Description: <strong style="color:#6ea7fd"> ${description}</strong> <img style="width:24px;" src="${icon}"/></p>
      <p>Humidity: <strong style="color:#6ea7fd">${humidity}%</strong></p>
      <p>Wind (kph): <strong style="color:#6ea7fd">${wind}</strong></p>
      <p>Visibility (kph): <strong style="color:#6ea7fd">${vis}</strong></p>
    `;

    element.innerHTML = weatherDisplay;
  } catch (error) {
    displayError('Error retrieving weather information. Please try again.');
    console.error(error);
  }
};

//Error display
const displayError = (message) => {
  const errorElement = document.createElement('p');
  errorElement.classList.add('error');
  errorElement.textContent = message;
  element.appendChild(errorElement);
};

const getWeatherBtn = document.getElementById('getWeatherBtn');
getWeatherBtn.addEventListener('click', () => {
  const locationInput = document.getElementById('locationInput').value;
  if (locationInput.trim() !== '') {
    getWeatherData(locationInput);
  } else {
    displayError('Please enter a valid location.');
  }
});
}

