import React from 'react';
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';
import Page404 from './page404';
import LIST_ROUTES from './listRoutes';
import Middleware from './middleware';
import { compose } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import reduxCore from '../redux/configureStore'; 

const ComponentRendered = ({ children, middleware }) => {
  const activeMiddleware = middleware ? middleware.map((m) => (Middleware[m])) : [];
  return compose(...activeMiddleware)(children)
};

const App = () => {
  return (
    <Provider store={reduxCore.store}>
      <PersistGate loading={null} persistor={reduxCore.persistor}>
        <BrowserRouter>
          <Switch>
            {
              LIST_ROUTES.map(({ component: Component, middleware, ...props}, i) => (
                <Route key={i} {...props}>
                  <ComponentRendered middleware={middleware}>
                    <Component />
                  </ComponentRendered>
                </Route>
              ))
            }
            <Route path="/404">
              <Page404 />
            </Route>
            <Route path="*">
              <Redirect to="/404" />
            </Route>
          </Switch>
        </BrowserRouter>  
      </PersistGate>
    </Provider>
  );
};

export default App;
