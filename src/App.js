import React from 'react';
import Navigation from './navigation/';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducer';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

/**
 * App Startup Component
 */

export const store = createStore(reducers, {}, applyMiddleware(thunk));

const App = props => {
  const persistor = persistStore(store);
  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
  );
};

export default App;
