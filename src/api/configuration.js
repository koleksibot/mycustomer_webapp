import axios from 'axios'
import {locStoreAccessToken} from '../library/libLocalStorage'
import {encryptCode, signatureCode} from '../library/libApi'

const apiUrlTrial = 'https://sandbox.guard.globalextreme.net'
const apiUrlProduction = 'https://sandbox.guard.globalextrem.net'

const api = apiUrlTrial
const apiVersion = 'v1'
const endPoint = '/';
export const baseUrl = api + '/mygx/api/' + apiVersion + endPoint


export async function post(url, payload, headers = {}, others) {
    return await axios({
        baseURL: baseUrl,
        method: 'POST',
        url: url,
        data: payload,
        headers: {...headers},
        withCredentials: false,
        ...others
    })
}


const keyCancel = {}
const CancelToken = axios.CancelToken;

export function useCancelToken(parentName) {
    if (keyCancel[parentName]) {
        keyCancel[parentName]()
    }

    return {
        cancelToken: new CancelToken(function executor(c) {
            keyCancel[parentName] = c;
        })
    }
}

export function argCancelToken(err) {
    if (axios.isCancel(err)) {
        return {status: 'cancel'}
    }
}

export function argCatchMsg(err) {
    return err !== null && err.message && err.message !== undefined ? true : false
}


export const headAuth = {'Authorization': `Bearer ${locStoreAccessToken.get||''}`}

export function postConfigBody(url, payload = {}, others = {}) {
    const dataBody = payload && Object.keys(payload).length > 0 ? {...payload, ...META_PARAMETERS} : {...META_PARAMETERS}

    return post(url, dataBody, others, configHeadBody(dataBody))
}

export function shapePostThen(url, isUseToken, isMsgSuccess) {
    return url
        .then((res) => {
            if (res.data.status == 'success') {
                if (isMsgSuccess) {
                    // notify.apiSuccess(res.data.success)
                }
            } else {
                // notify.apiErr(res.data.errors, true)
            }
            return res.data
        })
        .catch((err) => {
            if (isUseToken && argCatchMsg(err)) {
                // notify.error(err.message)
            } else {
                return argCancelToken(err)
            }
        })
}

export const configHeadBody = (payload) => {
    return {
        ...headAuth,
        'Content-Type': 'application/json',
        'MyGlobalXtreme-Secret': encryptCode(),
        'MyGlobalXtreme-Signature': signatureCode(payload)
    }
}