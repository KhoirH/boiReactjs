import React from 'react';
import {
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';

function PivateApp({ statusPage, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => (statusPage.isAuthenticated ? (
        children
      ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
      ))
      }
    />
  );
}

const mapsStateToProps = (state) => ({
  statusPage: state.StatusPageReducer,
});
export default withRouter(connect(mapsStateToProps)(PivateApp));
