import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.scss';
import App from './Components/App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from './Redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>
);
