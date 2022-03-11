import { useMemo } from "react";
import { dayTheme, nightTheme, rainTheme, cloudsTheme } from '../../constants/theme';
import { ThemeProvider as DefaultThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import weatherIndicator from "../../utils/weatherIndicator";

const ThemeProvider = ({children}) => {
  const weather = useSelector(state => state.weather.data);
  const themes = {
    'Clouds': cloudsTheme,
    'Rain': rainTheme,
    'Night': nightTheme,
    'Day': dayTheme,
  }

  const theme = useMemo(() => {
    if (weather) {
      return themes[weatherIndicator(weather.current)]
    }

    return dayTheme;
  }, [weather])

  return (
    <DefaultThemeProvider theme={theme}>{children}</DefaultThemeProvider>
  )
};

export default ThemeProvider;
