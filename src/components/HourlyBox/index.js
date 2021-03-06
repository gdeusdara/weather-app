import { useSelector } from 'react-redux';
import HourlyBoxItem from './Item';
import ListBoxTemplate from '../ListBoxTemplate';

const HourlyBox = () => {
  const weather = useSelector(state => state.weather.data);
  const renderItem = ({ item }) => <HourlyBoxItem hour={item} />

  if(weather) {
    return (
      <ListBoxTemplate
        title="Próximas horas"
        list={weather.hourly}
        renderItem={renderItem}
        horizontal
      />
    )
  }

  return null
};

export default HourlyBox;
