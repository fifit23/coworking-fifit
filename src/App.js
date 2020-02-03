import React from 'react';
import Home from './pages/home';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
