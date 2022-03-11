import { useMemo } from "react";
import { dayTheme, nightTheme, rainTheme, cloudsTheme } from '../constants/theme';
import { ThemeProvider as DefaultThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

const ThemeProvider = ({children}) => {
  const weather = useSelector(state => state.weather.data);

  const theme = useMemo(() => {
    if (weather) {
      if (weather.current.weather[0].main === 'Clouds') {
        return cloudsTheme;
      }

      if (weather.current.weather[0].main === 'Rain') {
      return rainTheme;
      }

      const now = Date.now();

      if (now < weather.current.sunrise || now > weather.current.sunset) {
        return nightTheme;
      }
    }

    return dayTheme;
  }, [weather])

  return (
    <DefaultThemeProvider theme={theme}>{children}</DefaultThemeProvider>
  )
};

export default ThemeProvider;
