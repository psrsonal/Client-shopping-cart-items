import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './components/admin/Dashboard'
import PrivateRoute from './components/admin/PrivateRoute'
import Home from './components/core/Home'
import Shop from './components/core/Shop'
import Signin from './components/core/Signin'
import Signup from './components/core/Signup'

const Routes = () => {
  return <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Shop" component={Shop} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/user/dashboard" component={Dashboard} />
      </Switch>
  </HashRouter>
}

export default Routes