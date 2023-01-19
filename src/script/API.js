import { currentBlock } from "./current.js";
import { hourlyBlock } from "./hourly.js";
import { dailyBlock } from "./daily.js";

const APIkey = "9832905a1bed9547d41f2cdaed555ef3"
const geoAPI = 'https://api.openweathermap.org/geo/1.0/direct?q='
const coordinatesAPI = 'https://api.openweathermap.org/data/2.5/onecall?';

async function geocodingCity(city) {
    const response = await fetch(`${geoAPI}${city}&limit=1&appid=${APIkey}`)
    const dataCity = await response.json()

    const nameCity = await dataCity[0].name
    const nameCountry = await dataCity[0].country

    const latCity = await dataCity[0].lat
    const lonCity = await dataCity[0].lon

    coordinatesURL(latCity, lonCity, nameCity, nameCountry)
}

async function coordinatesURL(lat, lon, nameCity, nameCountry) {
  const response = await fetch(`${coordinatesAPI}lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${APIkey}`)
  const data = await response.json()

  dailyBlock(data.daily)
  hourlyBlock(data.hourly)
  currentBlock(data.current, nameCity, nameCountry)
};

export { geocodingCity }