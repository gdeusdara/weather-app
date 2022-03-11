
// Get weather object and returns if it is:
/*
    'Clouds'
    'Rain'
    'Night'
    'Day'
*/
const weatherIndicator = (weather, all = false) => {
  if (weather) {
    if (all) {
      if (weather.weather[0].main === 'Clouds') {
        return 'Clouds';
      }
  
      if (weather.weather[0].main === 'Rain') {
      return 'Rain';
      }
    }

    const now = Date.now();
    if (weather.sunrise && weather.sunset && (now < weather.sunrise || now > weather.sunset)) {
      return 'Night';
    }

    const time = new Date(weather.dt * 1000).getHours()
    if (time < 6 || time > 18) {
      return 'Night';
    }

  }

  return 'Day';
}

export default weatherIndicator;
