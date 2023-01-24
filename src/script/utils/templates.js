const currentTemplate = document.createElement('template')
currentTemplate.innerHTML = `
  <div class='current__temp' id='cTemp'>
    <h4></h4>
    <h2></h2>
    <span class='current__temp--feelsLike'>
      <h4>Feels like</h4><h4></h4>
    </span>
  </div>
  <div class='current__info' id='cInfo'>
    <img>
    <h3></h3>
    <p></p>
  </div>
  <ul class='current__others' id='cOthers'>
    <li class='current__others--sunrise'><h3>Sunrise</h3><p></p></li>
    <li class='current__others--sunset'><h3>sunset</h3><p></p></li>
    <li class='current__others--uvi'><h3>UVI</h3><p></p></li>
    <li class='current__others--windSpeed'><h3>wind speed</h3><p></p></li>
  </ul>
`

const hourlyTemplate = document.createElement('template')
hourlyTemplate.innerHTML = `
<div>
    <h3></h3>
    <img>
    <h2></h2>
    <span>
      <h3>POP</h3><h4></h4>
    </span>
</div>
`

const dailyTemplate = document.createElement('template')
dailyTemplate.innerHTML = `
<div>
<div id='elementInfo' class='daily__info'>
    <img>
    <div id='dTemp'>
        <h3 class='daily__time' id='dTime'></h3>
        <span>
          <h2></h2>
          <h2></h2>
        </span>
        <p></p>
    </div>
</div>
<div id='elementOthers' class='daily__extra inactive'>
    <ul id='d1Others'>
        <li><h3>POP</h3><p></p></li>
        <li><h3>Sunrise</h3><p></p></li>
        <li><h3>Sunset</h3><p></p></li>
        <li><h3>UVI</h3><p></p></li>
    </ul>
    <ul id='d2Others'>
        <li><h3>FEELS</h3></li>
        <li><h3>Morn</h3><p></p></li>
        <li><h3>Eve</h3><p></p></li>
        <li><h3>Night</h3><p></p></li>
    </ul>
</div>
</div>
`

export { currentTemplate , hourlyTemplate , dailyTemplate }