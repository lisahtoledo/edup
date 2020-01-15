import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Center from '../view/home/center'

export default function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={ Center } />
    </Switch>
  );
}
