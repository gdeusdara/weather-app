import moment from 'moment';
import 'moment/locale/pt-br'
moment.locale('pt-br')

import { UIManager } from 'react-native';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

import {Provider} from 'react-redux';
import configureStore from './store';
import Weather from './pages/Weather';
import { ThemeProvider } from './components';
const {store} = configureStore();

const App = () => (
  <Provider store={store}>
    {/* Pages provider. AKA react-navigation (: */}
    <ThemeProvider>
      <Weather />
    </ThemeProvider>
  </Provider>
);

export default App;
