import {Provider} from 'react-redux';
import configureStore from './store';
import Weather from './pages/weather';

const {store} = configureStore();

const App = () => (
  <Provider store={store}>
    {/* Pages provider. AKA react-navigation (: */}
    <Weather />
  </Provider>
);

export default App;
