import { clouds, rain, day, night } from "../assets/lottie";

const theme = {
  fonts: {
    big: 30,
    title: 20,
    subtitle: 18,
    medium: 15,
    mediumTiny: 12,
    tiny: 10
  },
  colors: {
    black: '#000000',
    white: '#ffffff',
    night1: '#28397e',
    night2: '#02013a',
    rain1: '#fcfcfc',
    rain2: '#cac8c8',
    day1: '#fcfeff',
    day2: '#96d7ff'
  }
}

const dayTheme = {
  text: theme.colors.black,
  background1: theme.colors.day1,
  background2: theme.colors.day2,
  animation: day,
  message: 'Aproveite o dia!'
};

const nightTheme = {
  text: theme.colors.white,
    background1: theme.colors.night1,
    background2: theme.colors.night2,
  animation: night,
  message: 'A noite é uma criança...'
};

const rainTheme = {
  text: theme.colors.white,
    background1: theme.colors.night1,
    background2: theme.colors.night2,
  animation: rain,
  message: 'Não se esqueça do guarda chuva'
};

const cloudsTheme = {
  text: theme.colors.black,
  background1: theme.colors.rain1,
  background2: theme.colors.rain2,
  animation: clouds,
  message: 'Nada com o que se preocupar'
};

export {
  dayTheme,
  nightTheme,
  rainTheme,
  cloudsTheme
}

export default theme;
