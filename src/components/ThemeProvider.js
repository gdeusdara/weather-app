import { useMemo } from "react";
import { dayTheme, nightTheme, rainTheme, cloudsTheme } from '../constants/theme';
import { ThemeProvider as DefaultThemeProvider } from "styled-components";

const ThemeProvider = ({weather, children}) => {

  const theme = useMemo(() => {
    if (weather.weather[0].main === 'Clouds') {
      return cloudsTheme;
    }

    if (weather.weather[0].main === 'Rain') {
     return rainTheme;
    }

    const now = Date.now();

    if (now < weather.sunrise || now > weather.sunset) {
      return nightTheme;
    }

    return dayTheme;
  }, [weather])

  return (
    <DefaultThemeProvider theme={theme}>{children}</DefaultThemeProvider>
  )
};

export default ThemeProvider;
