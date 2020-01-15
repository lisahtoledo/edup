import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Center from '../view/home/center'
import Login from '../view/login/login'
import ChooseUserOrCompany from '../view/chooseUserOrCompany/chooseUserOrCompany'

export default function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={ Center } />
        <Route path="/login" exact component={ Login } />
        <Route path="/choose" exact component={ ChooseUserOrCompany } />
    </Switch>
  );
}
