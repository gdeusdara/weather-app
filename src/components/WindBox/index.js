import { useSelector } from 'react-redux';
import SmallInfoBox from '../SmallInfoBox';

const WindBox = () => {
  const weather = useSelector(state => state.weather.data);

  return (
    <SmallInfoBox title="Velocidade do vento" value={weather.current.wind_speed} unity="km/h" />
  )
};

export default WindBox;
