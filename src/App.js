
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouterComponent from './Router/RouterComponent';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


import { Provider } from 'react-redux';
import { store } from './redux/store';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>
      <RouterComponent />
      </Provider>
   
    </BrowserRouter>
    </div>
  );
}

export default App;
