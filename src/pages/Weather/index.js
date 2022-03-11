import { SafeAreaView, ScrollView } from 'react-native';
import weatherHooks from '../../hooks/weather';
import { Container, Line } from './styles';
import { CurrentWeather, HourlyBox, DailyBox } from '../../components';
import HumidityBox from '../../components/HumidityBox';
import WindBox from '../../components/WindBox';

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
          <Line>
            <HumidityBox />
            <WindBox />
          </Line>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

