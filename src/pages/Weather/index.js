import { SafeAreaView, ScrollView } from 'react-native';
import weatherHooks from '../../hooks/weather';
import { Container, Line } from './styles';
import { CurrentWeather, HourlyBox, DailyBox } from '../../components';
import HumidityBox from '../../components/HumidityBox';
import WindBox from '../../components/WindBox';
import InfoScreen from '../../components/InfoScreen';
import { weatherLoading as weatherLoadingAnimation, error } from '../../assets/lottie';

export default function App() {
  const {
    tryAgain,
    weather,
    location,
    locationLoading,
    weatherLoading,
    addressLoading,
    locationError,
    weatherError,
    addressError,
  } = weatherHooks();

  if (locationLoading || weatherLoading || addressLoading) {
    return (
      <Container>
        <InfoScreen source={weatherLoadingAnimation} title="Carregando informações..." />
      </Container>
    )
  }

  if (locationError || weatherError || addressError) {
    return (
      <Container>
        <InfoScreen source={error} title={locationError || weatherError || addressError} onPress={tryAgain} />
      </Container>
    )
  }

  if (!weather || !location) {
    return (
      <Container>
        <InfoScreen source={weatherLoadingAnimation} title="Carregando informações..." />
      </Container>
    )
  }

  return (
    <Container>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CurrentWeather onPress={tryAgain} />
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

