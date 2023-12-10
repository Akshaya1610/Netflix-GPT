import './App.css';
import Main from './components/Main';
import appStore from '../src/utils/appStore'
import { Provider } from 'react-redux';

function App() {
  return (
  <Provider store={appStore}>
    <Main />
  </Provider>
    
  );
}

export default App;
