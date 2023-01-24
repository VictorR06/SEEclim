import { convertUnixC , convertUnixD } from "./utils/converUnix.js"
import { dailyTemplate } from "./utils/templates.js"

const dailyContent = document.getElementById('dailyContent')

function dailyBlock(array) {
    const dailyElements = []

    const newArray = array.slice(1)
    newArray.forEach((data) => {
        const dailyElement = dailyTemplate.content.cloneNode(true)
        dailyElement.querySelector('#dTime').textContent = convertUnixD(data.dt)

        dailyElement.querySelector('img').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        dailyElement.querySelector('#dTemp span h2:nth-of-type(1)').textContent = `${~~data.temp.max}°`
        dailyElement.querySelector('#dTemp span h2:nth-of-type(2)').textContent = `${~~data.temp.min}°`
        dailyElement.querySelector('#dTemp p').textContent = data.weather[0].description

        dailyElement.querySelector('#d1Others li:nth-of-type(1) p').textContent = data.pop
        dailyElement.querySelector('#d1Others li:nth-of-type(2) p').textContent = convertUnixC(data.sunrise)
        dailyElement.querySelector('#d1Others li:nth-of-type(3) p').textContent = convertUnixC(data.sunset)
        dailyElement.querySelector('#d1Others li:nth-of-type(4) p').textContent = data.uvi

        dailyElement.querySelector('#d2Others li:nth-of-type(2) p').textContent = `${~~data.feels_like.morn}°`
        dailyElement.querySelector('#d2Others li:nth-of-type(3) p').textContent = `${~~data.feels_like.eve}°`
        dailyElement.querySelector('#d2Others li:nth-of-type(4) p').textContent = `${~~data.feels_like.night}°`

        const elementInfo = dailyElement.querySelector('#elementInfo')
        const elementOthers = dailyElement.querySelector('#elementOthers')
        elementInfo.addEventListener('click', () => {
            elementOthers.classList.toggle('inactive')
        })

        dailyElements.push(dailyElement)
    });

    dailyContent.append(...dailyElements)
}

export { dailyBlock }