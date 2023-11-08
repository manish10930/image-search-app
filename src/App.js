import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Store from "./utils/Store"
import { Provider } from 'react-redux';
function App() {
  return (
   <>
   <Provider store={Store}>
    <Home/>
   </Provider>
   </>
  );
}

export default App;
