import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
<<<<<<< HEAD
import './normalize.css';
import './services/fonts.css';
import './services/variables.css';
import './index.css';
=======
>>>>>>> 55e1b1885cc71ae8ed0aeaa0221936d35ff1500c
import App from './components/App';
import { store, persistor } from './redux/store';
// import './normalize.css';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
