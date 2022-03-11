import { SafeAreaView } from 'react-native';
import weatherHooks from '../../hooks/weather';
import { Container } from './styles';
import { CurrentWeather, HourlyBox } from '../../components';

export default function App() {
  const {
    weather,
    address,
  } = weatherHooks();

  if (!weather || !address || !address.length) {
    return null
  }

  return (
    <Container>
      <SafeAreaView>
        <CurrentWeather />
        <HourlyBox />
      </SafeAreaView>
    </Container>
  );
}

