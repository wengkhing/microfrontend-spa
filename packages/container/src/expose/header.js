import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Header from '../components/Header';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();
const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <Header
          onSignOut={() => {}}
          isSignedIn={false}
        />
      </StylesProvider>
    </Router>,
  el);
};

// We are running through container
// and we should export the mount function
export { mount };
