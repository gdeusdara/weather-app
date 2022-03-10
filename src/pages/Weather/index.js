import { SafeAreaView } from 'react-native';
import weatherHooks from '../../hooks/weather';
import { Container } from './styles';
import { CurrentWeather, ThemeProvider } from '../../components';

export default function App() {
  const {
    weather,
    address,
  } = weatherHooks();

  if (!weather || !address || !address.length) {
    return null
  }

  return (
    <ThemeProvider weather={weather.current}>
      <Container>
        <SafeAreaView>
          <CurrentWeather weather={weather.current} address={address[0]}></CurrentWeather>
        </SafeAreaView>
      </Container>
    </ThemeProvider>
  );
}

