import React from 'react';
import { Link, Route, Switch } from 'wouter';
import Counter from './components/Counter';
import HomePage from './components/Home';

function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
      </Switch>
    </>
  );
}

export default App;
