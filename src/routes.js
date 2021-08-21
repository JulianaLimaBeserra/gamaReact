import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Repositories from './Pages/Home/Repositories/Repositories';
import Home from './Pages/Home/Home';

export default function Routes () {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/repositories' component={Repositories} />
    </Switch>
    </BrowserRouter>
  )
}