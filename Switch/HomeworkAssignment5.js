
function convertToSeconds(value, label) {
  if (typeof (value) !== 'number' || typeof (label) !== 'string') {
    console.log('input is incorrect, try again *')
    return null
  }
  else if (value == 1 && label.slice(-1) === 's' || value > 1 && label.slice(-1) !== 's') {
    console.log('input is incorrect, try again **')
    return null
  }

  switch (label) {
    case 'second':
    case 'seconds': return value
    case 'minute':
    case 'minutes':
      return value * 60
    case 'hour':
    case 'hours':
      return value * 60 * 60
    default: console.log('input is incorrect***', label)
      return null
  }
}

function timeAdder(value1, label1, value2, label2) {

  var arr = []
  const xSeconds = convertToSeconds(value1, label1)
  const ySeconds = convertToSeconds(value2, label2)

  //todo: await?
  if (xSeconds && ySeconds) {
    console.log('xSeconds && ySeconds:', xSeconds, ySeconds)
    var zSeconds = xSeconds + ySeconds
  }
  else {
    console.log('input is incorrect, try again ****')
    return null
  }

  if (zSeconds % 3600 == 0) {
    let hours = zSeconds / 3600
    if (hours % 24 == 0) {
      let days = hours / 24
      arr = [days, days > 1 ? 'days' : 'day']
    }
    else arr = [hours, hours > 1 ? 'hours' : 'hour']

  } else if (zSeconds % 60 == 0) {
    let minutes = zSeconds / 60
    arr = [minutes, minutes > 1 ? 'minutes' : 'minute']

  } else {
    arr = [zSeconds, zSeconds > 1 ? 'seconds' : 'second']
  }
  console.log(arr)
  return arr
}

// #region TEST

timeAdder(3, 'hours', 21, 'hours') //4 minutes
timeAdder(1, 'minute', 240, 'seconds')
timeAdder(240, 'seconds', 240, 'seconds')
timeAdder(60, 'minutes', 23, 'hours')
timeAdder(60, 'minutes', 23, 'true')
timeAdder(3, 'hours', 21, 'seconds')
timeAdder(false, 'hours', 21, 'seconds')
timeAdder(4, 'hour', 21, 'seconds')
timeAdder(5, 'days', 25, 'hours')
timeAdder(1, 'minute', 240, 'seconds')

// #endregion TEST

//@PLAN:
/*const arr = [value3, label3] //[5, 'minutes'] || [1, 'hour'] || 500 seconds
  //error cases:
  // 5 minute , 3 days
  // 1 minutes , 4 hours
  // false, false, 5, minutes
  // if seconds - seconds - don't convert
  // if min + hours = convert hours to minutes (y * 60)
  // if min + seconds = convert min to seconds (x * 60)
  //hours case:
  //if % 24 ==0? return the number
  //minutes case
  //if %
  */