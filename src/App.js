import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Markers from './containers/Markers/Markers';
import Marker from './containers/Marker/Marker';

const App = ({ location }) => {
  if (location.pathname === '/') {
    return <Redirect to="/markers" />;
  }

  return (
    <>
      <Switch location={location}>
        <Route path="/markers" component={Markers} />
        <Route path="/marker/:id/:edit?" component={Marker} />
      </Switch>
    </>
  );
}

export default App;
