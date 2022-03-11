import weatherIndicator from '../../utils/weatherIndicator';
import { clouds as cloudsAnimation, rain as rainAnimation, night as nightAnimation, day } from "../../assets/lottie";

import {
  Lottie,
} from './styles'

const Animation = ({weather, size = 30, clouds = true, rain = true, night = true }) => {

  const animation = {
    'Clouds': cloudsAnimation,
    'Rain': rainAnimation,
    'Night': nightAnimation,
    'Day': day,
  }

  return (
      <Lottie source={animation[weatherIndicator(weather, clouds, rain, night)]} size={size} />
  )
};

export default Animation;
