import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Center from '../view/home/center'
import Login from '../view/login/login'
import ChooseUserOrCompany from '../view/chooseUserOrCompany/chooseUserOrCompany'
import cadastroUsuario from '../view/register/registerUser/registerUsersPass1'
import cadastroUsuario2 from '../view/register/registerUser/registerUsersPass2'
import cadastroUsuario3 from '../view/register/registerUser/registerUsersPass3'

export default function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={ Center } />
        <Route path="/login" exact component={ Login } />
        <Route path="/choose" exact component={ ChooseUserOrCompany } />
        <Route path="/cadastroUsuario" exact component={ cadastroUsuario } />
        <Route path="/cadastroUsuario2" exact component={ cadastroUsuario2 } />
        <Route path="/cadastroUsuario3" exact component={ cadastroUsuario3 } />
    </Switch>
  );
}
