import { clouds, rain, day, night } from "../assets/lottie";

const theme = {
  fonts: {
    title: 20,
    subtitle: 18,
    medium: 15,
    mediumTiny: 12,
    tiny: 10
  },
  colors: {
    black: '#000000',
    white: '#ffffff',
    night: '#1e2b6d',
    rain: '#d4d3d2',
    day: '#a6ddff'
  }
}

const dayTheme = {
  text: theme.colors.black,
  background: theme.colors.day,
  animation: day,
  message: 'Aproveite o dia!'
};

const nightTheme = {
  text: theme.colors.white,
  background: theme.colors.night,
  animation: night,
  message: 'A noite é uma criança...'
};

const rainTheme = {
  text: theme.colors.white,
  background: theme.colors.night,
  animation: rain,
  message: 'Não se esqueça do guarda chuva'
};

const cloudsTheme = {
  text: theme.colors.black,
  background: theme.colors.rain,
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
