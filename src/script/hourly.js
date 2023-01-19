import { convertUnixH } from "./utils/converUnix.js"
import { hourlyTemplate } from "./utils/templates.js"

const hourlyContent = document.getElementById('hourlyContent')

function hourlyBlock(array) {
    const hourlyElements = []

    const newArray = array.slice(1,25)
    newArray.forEach((data) => {
        const hourlyElement = hourlyTemplate.content.cloneNode(true)
        hourlyElement.querySelector('h3:nth-of-type(1)').textContent = convertUnixH(data.dt)
        hourlyElement.querySelector('img').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        hourlyElement.querySelector('h2').textContent = data.temp
        hourlyElement.querySelector('span h3:nth-of-type(2)').textContent = data.pop

        hourlyElements.push(hourlyElement)
    })

    hourlyContent.append(...hourlyElements)
}

export { hourlyBlock }