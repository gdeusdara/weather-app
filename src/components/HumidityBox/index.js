import { useSelector } from 'react-redux';
import SmallInfoBox from '../SmallInfoBox';

const HumidityBox = () => {
  const weather = useSelector(state => state.weather.data);

  return (
    <SmallInfoBox title="Umidade" value={weather.current.humidity} unity="%" />
  )
};

export default HumidityBox;
