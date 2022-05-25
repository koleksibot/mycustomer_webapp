import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {locStoreIsAuth} from '../library/libLocalStorage'

const AppRoute = ({
    component: Component,
    layout: Layout,
    isAuthProtected,
    ...rest
}) => (
    <Route {...rest} exact
           render={(props) => {

               if (isAuthProtected && !locStoreIsAuth) {
                   return (<Redirect to={{pathname: "/auth/login", state: { from: props.location } }}/>);
               }

               return (
                   <Layout>
                       <Component {...props} />
                   </Layout>
               )
           }}/>)

export default AppRoute