import React, { lazy, Suspense, useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import {
  AuthProvider,
  AuthContext
} from './AuthContext';

import Home from './Home';
import Login from './Login';
const User = lazy(() => import('./User'));

const UnauthenticatedRoutes = () => (
  <Switch>
    <Route path="/login">
      <Login />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
  </Switch>
);

const AuthenticatedRoute = ({ children, ...rest }) => {
  const auth = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() =>
        auth.isAuthenticated() ? (
          <Suspense fallback={<div>Loading...</div>}> {children}</Suspense>
        )
        : (
          <Redirect to="/" />
        )
      }
    ></Route>
  );
};

const AppRoutes = () => {
  return (
    <>
        <Switch>
          <AuthenticatedRoute path="/user">
            <User />
          </AuthenticatedRoute>
          <UnauthenticatedRoutes />
        </Switch>
    </>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
            <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
