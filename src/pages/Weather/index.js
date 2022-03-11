import { SafeAreaView, ScrollView } from 'react-native';
import weatherHooks from '../../hooks/weather';
import { Container } from './styles';
import { CurrentWeather, HourlyBox, DailyBox } from '../../components';

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
        <ScrollView showsVerticalScrollIndicator={false}>
          <CurrentWeather />
          <HourlyBox />
          <DailyBox />
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

