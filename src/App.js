import 'moment/locale/pt-br'
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
