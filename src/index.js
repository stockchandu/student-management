import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./store/store";
import { LiveUserContext } from "./context/LiveUser"
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LiveUserContext>
      <App />
      </LiveUserContext>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

