import { convertUnixC } from "./utils/converUnix.js"
import { currentTemplate } from "./utils/templates.js"

const currentContent = document.getElementById('currentContent')

function currentBlock(data, nameCity, nameCountry) {
  const currentElement = currentTemplate.content.cloneNode(true)
  currentElement.querySelector('#cTemp h4:nth-of-type(1)').textContent = `${nameCity}, ${nameCountry}`
  currentElement.querySelector('#cTemp h2').textContent = `${~~data.temp}°`
  currentElement.querySelector('#cTemp h4:nth-of-type(2)').textContent = `${~~data.feels_like}°`

  currentElement.querySelector('#cInfo img').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  currentElement.querySelector('#cInfo img').alt = data.weather[0].main
  currentElement.querySelector('#cInfo h3').textContent = data.weather[0].main
  currentElement.querySelector('#cInfo p').textContent = data.weather[0].description

  currentElement.querySelector('#cOthers li:nth-of-type(1) p').textContent = convertUnixC(data.sunrise)
  currentElement.querySelector('#cOthers li:nth-of-type(2) p').textContent = convertUnixC(data.sunset)
  currentElement.querySelector('#cOthers li:nth-of-type(3) p').textContent = data.uvi
  currentElement.querySelector('#cOthers li:nth-of-type(4) p').textContent = `${data.wind_speed} km/h`

  currentContent.append(currentElement)
}

export { currentBlock }