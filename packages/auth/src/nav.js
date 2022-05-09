import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<div>Auth nav component</div>, el);
};

// We are running through container
// and we should export the mount function
export { mount };
