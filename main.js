import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { weatherApi } from './weather.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Weather App</h1>
      <div class="form-group">
        <input type="text" id="locationInput" class="form__input" placeholder="Enter location">
      </div>
      <button id="getWeatherBtn" class="btn btn-primary">Get Weather</button>
      <div id="weatherInfo"></div>
  </div>
`

weatherApi(document.querySelector('#weatherInfo'))
