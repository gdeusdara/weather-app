
// Get weather object and returns if it is:
/*
    'Clouds'
    'Rain'
    'Night'
    'Day'
*/

const weatherIndicator = (weather, clouds = true, rain = true, night = true) => {
  if (weather) {
    if (weather.weather[0].main === 'Clouds' && clouds) {
      return 'Clouds';
    }

    if (weather.weather[0].main === 'Rain' && rain) {
    return 'Rain';
    }

    if (night) {
      const now = Date.now();
      if (weather.sunrise && weather.sunset && (now < weather.sunrise || now > weather.sunset)) {
        return 'Night';
      }

      const time = new Date(weather.dt * 1000).getHours()
      if (time < 6 || time > 18) {
        return 'Night';
      }
    }
  }

  return 'Day';
}

export default weatherIndicator;
