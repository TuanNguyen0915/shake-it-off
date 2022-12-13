let shakeItOff = new Audio('../assets/shake-it-off.mp3')
let darkNight = new Audio('../assets/dark-night.mp3')
let daylight = new Audio('../assets/daylight.mp3')
let noNiceThings = new Audio('../assets/no-nice-things.mp3')

function playShakeItOff() {
  shakeItOff.play()
}

function playDarkNight() {
  darkNight.play()
}

function playDaylight() {
  daylight.play()
}

function playNoNiceThings() {
  noNiceThings.play()
}

export {
  playShakeItOff,
  playDarkNight,
  playDaylight,
  playNoNiceThings
}