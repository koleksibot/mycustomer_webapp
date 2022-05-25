import {STORAGE_ACCESS_TOKEN, STORAGE_ACCOUNT, STORAGE_PASS_BILL} from '../config/localStorage'

const _shapeLocStore = (name) => {
    return {
        save: (value) => window.localStorage.setItem(name, value),
        get: window.localStorage.getItem(name),
        remove: window.localStorage.removeItem(name)
    }
}

export const locStoreAccessToken = {..._shapeLocStore(STORAGE_ACCESS_TOKEN)}
export const locStoreAccount = {..._shapeLocStore(STORAGE_ACCOUNT)}
export const locStoreBill = {..._shapeLocStore(STORAGE_PASS_BILL)}

export const locStoreIsAuth = locStoreAccount.get