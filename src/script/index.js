import { geocodingCity } from "./API.js"

const searchCity = document.getElementById('searchCity')
const iconSearch = document.getElementById('iconSearch')
const suggestionsList = document.getElementById('suggestionsList')

searchCity.addEventListener('keyup', (event) => {
  if (event.key !== 'Enter' || event.key !== 'Backspace') {
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${searchCity.value}&key=f06e21ec6c8744dcbf39e701700d4f75`)
      .then(response => response.json())
      .then(data => {
        suggestionsList.innerHTML = ''

        data.results.forEach(result => {
          if (result.components.city) {
            const city = result.components.city
            const country = result.components.country

            const suggestion = document.createElement('li')
            suggestion.innerHTML = `${city}, ${country}`
            suggestion.addEventListener('click', () => {
              const suggestionCity = suggestion.textContent
              searchCity.value = suggestionCity

              geocodingCity(searchCity.value)
              suggestionsList.innerHTML = ''
              searchCity.value = ''
            })

            suggestionsList.appendChild(suggestion)
          }
        });
      });
  }
})

searchCity.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    geocodingCity(searchCity.value)
    suggestionsList.innerHTML = ''
    searchCity.value = ''
  }
})

iconSearch.addEventListener('click', () => {
    geocodingCity(searchCity.value)
    suggestionsList.innerHTML = ''
    searchCity.value = ''
})

geocodingCity('arequipa')