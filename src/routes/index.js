import React from 'react'
import {Redirect} from 'react-router-dom'
import PATH from './path'

import Login from '../pages/auth/Login'
import ForgotPassword from '../pages/auth/ForgotPassword'
import ResetPassword from '../pages/auth/ResetPassword'

const _shapeRoute = (ulr, component) => {
    return {path: ulr, component: component}
}

const publicRoutes = [
    {..._shapeRoute(PATH.AUTH_LOGIN, Login)},
    {..._shapeRoute(PATH.AUTH_Forgot_PW, ForgotPassword)},
    {..._shapeRoute(PATH.AUTH_REST_PW, ResetPassword)},
]

const authRoutes = [
    {exact: true, ..._shapeRoute('/', () => <Redirect to="/home" />)},
]

const blankRoutes = [
    {component: (<h4>Not Found 404</h4>)}
]

export {publicRoutes, authRoutes, blankRoutes}