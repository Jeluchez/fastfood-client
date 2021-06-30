import React from 'react';
import { Provider } from 'react-redux';
import { LoginScreen } from './components/auth/LoginScreen';
import { store } from './store/store';

import './styles/styles.scss';

export const FastFoodApp = () => {

  return (
    <>
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    </>
  )
}

