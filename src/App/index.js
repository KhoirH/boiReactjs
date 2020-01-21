import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import NotMatchLink from './modules/NotMatchLink';
import Redux from './redux/store';
import PrivateApp from './PrivateApp';
import ROUTERS from './routes';

function App() {
  return (
    <Provider store={Redux.store}>
      <PersistGate loading={null} persistor={Redux.persistor}>
        <div className="custome-container">
          <div className="top-barback"></div>
          <BrowserRouter>
            <Switch>
              {
                ROUTERS.map(({ isPrivate, Component, ...route }, i) => {
                  if (isPrivate) {
                    return (
                      <PrivateApp key={i} {...route}>
                        <Component></Component>
                      </PrivateApp>
                    );
                  }
                  return (
                    <Route key={i} {...route}>
                      <Component></Component>
                    </Route>
                  );
                })
              }
              <Route path="*">
                <NotMatchLink />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </PersistGate>
    </Provider>

  );
}

export default App;
