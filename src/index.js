import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);




registerServiceWorker();
