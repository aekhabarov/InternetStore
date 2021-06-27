import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../../routes'

function AppRouter() {
  const isAuth = false;
  return (
    <Switch>
      {isAuth && privateRoutes.map(({path, Component}) => 
      <Route key={path} path={path} component={Component} exact/>)}
        {publicRoutes.map(({path, Component}) => 
      <Route key={path} path={path} component={Component} exact/>)}
    </Switch>
  )
}

export default AppRouter
