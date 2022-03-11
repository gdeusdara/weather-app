import { useSelector } from 'react-redux';
import DailyBoxItem from './Item';
import ListBoxTemplate from '../ListBoxTemplate';

const DailyBox = () => {
  const weather = useSelector(state => state.weather.data);
  const renderItem = ({ item }) => <DailyBoxItem day={item} />

  if(weather) {
    return (
      <ListBoxTemplate
        title="Próximos dias"
        list={weather.daily}
        renderItem={renderItem}
      />
    )
  }

  return null
};

export default DailyBox;
