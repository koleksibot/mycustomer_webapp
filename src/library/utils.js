import {locStoreAccessToken} from './libLocalStorage'

export const isAuth = locStoreAccessToken.get ? true : false

