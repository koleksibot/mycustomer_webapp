import React, {Component} from 'react'
import './App.css';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import Layout from './layouts/index'
import {publicRoutes, authRoutes, blankRoutes} from './routes/'
import AppRoute from './routes/route'
import "./assets/scss/theme.scss"
import './thirdParty/firebase/firebase-messaging-sw'


const loopingRoute = (dataRoutes = [], customKey = 'route', isAuthProtected = false) => {
  return dataRoutes.map((route, idx) => (
      <AppRoute path={route.path}
                layout={Layout}
                component={route.component}
                key={customKey + idx}
                isAuthProtected={isAuthProtected}/>
  ))
}

class App extends Component {

  render() {

    return (
        <React.Fragment>
            <Router>
                <Switch>
                    {loopingRoute(publicRoutes, 'route-public')}
                    {loopingRoute(authRoutes, 'route-auth', true)}
                    {loopingRoute(blankRoutes, 'route-blank')}
                </Switch>
            </Router>
        </React.Fragment>
    )
  }
}

export default App;
