import weatherIndicator from '../../utils/weatherIndicator';
import { clouds, rain, day, night } from "../../assets/lottie";

import {
  Lottie,
} from './styles'

const Animation = ({weather, size = 30}) => {

  const animation = {
    'Clouds': clouds,
    'Rain': rain,
    'Night': night,
    'Day': day,
  }

  return (
      <Lottie source={animation[weatherIndicator(weather, true)]} size={size} />
  )
};

export default Animation;
