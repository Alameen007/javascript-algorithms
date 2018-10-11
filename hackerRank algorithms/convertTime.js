function timeConverter(s) {
    let timeArr = s.split(':')
     let hour = parseInt(timeArr[0])
     const AMPM = timeArr[2].substring(2)
     if (AMPM === 'PM') hour += 12
     if (AMPM === 'AM') hour = Math.abs(hour -= 12)
     if (hour === 8) hour = 4
     if (hour === 24) hour = 12
     if (hour < 10) hour = '0' + hour
     let time = `${hour}:${timeArr[1]}:${timeArr[2].substr(0, 2)}`
    console.log(time)
}

timeConverter('04:59:59AM')