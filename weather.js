export function weatherApi(element) {

  //Api key  
const apiKey = '1ad067633ecd428c80a173928232106';


const getWeatherData = async (location) => {
  element.innerHTML = '';

  try {
    
    //API response
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
    const data = await response.json();

    // Display weather information
    const cityName = data.location.name;
    const temperature = data.current.temp_c;
    const description = data.current.condition.text;
    const humidity = data.current.humidity;

    const weatherDisplay = `
      <h3>${cityName}</h3>
      <p>Temperature: ${temperature}°C</p>
      <p>Description: ${description}</p>
      <p>Humidity: ${humidity}%</p>
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

