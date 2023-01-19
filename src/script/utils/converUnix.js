function convertUnixC(unix) {
    const time = new Date(unix*1000)
    const hour = time.getHours()
    const minutes = time.getMinutes()
    return hour + ':' + minutes
}

function convertUnixH(unix) {
    const time = new Date(unix*1000)
    const hour = time.getHours()
    return hour + ':00'
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function convertUnixD(unix) {
    const time = new Date(unix*1000)
    const month = months[time.getMonth()]
    const dayName = days[time.getDay()]
    const day = time.getDate()
    return dayName + ', ' + month + ' ' + day + 'th'
}
  
export { convertUnixC , convertUnixH , convertUnixD}