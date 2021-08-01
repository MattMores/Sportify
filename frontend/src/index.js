import React from 'react';

import './index.css';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './context/Modal';
import App from './App';
import { DataLayer } from './DataLayer/DataLayer';
import reducer, { initialState } from "./DataLayer/reducer"
import configureStore from './store';
import { restoreCSRF, csrfFetch } from "./store/csrf";
import * as sessionActions from './store/session';
import * as betsActions from "./store/bets"
import { BetsContextProvider } from './BetsContext/BetsContext';

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
  window.betsActions = betsActions;
}

// const Carrot = () => (
//   <div style={{ color: "orange", fontSize: "100px" }}>
//     <i className="fas fa-carrot"></i>
//   </div>
// );

function Root() {
  return (
   <DataLayer initialState={initialState} reducer={reducer}>
      <BetsContextProvider>
        <ModalProvider>
          <Provider store={store}>
            <BrowserRouter>
              <App />
              {/* <Carrot /> */}
            </BrowserRouter>
          </Provider>
        </ModalProvider>
      </BetsContextProvider>
    </DataLayer>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
