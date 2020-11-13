import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Episode, Show } from './views';

const DEFAULT_SHOW_ID = 6771;

export const App = () => {
  const defaultRoute = `/${DEFAULT_SHOW_ID}`;
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/episodes/:episodeId" component={Episode} />
        <Route path="/:showId" component={Show} />
        <Redirect to={defaultRoute} />
      </Switch>
    </BrowserRouter>
  );
}
