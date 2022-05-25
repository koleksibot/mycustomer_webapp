import { v4 as uuidv4 } from 'uuid'
import crypto from 'crypto'
import {STORAGE_ACCESS_TOKEN, STORAGE_ACCOUNT,} from './localStorage'

// KEY UUID
export const KEY_UUID = uuidv4();

// MY GX STATIC KEY
export const MYGLOBALXTREME_KEY = "H0oPPa346kqDeqURhupv97w2lec7vmww"
export const MYGLOBALXTREME_IV = "7129387429101282"
export const MYGLOBALXTREME_SECRET = "MyGl0B4lXtr3MeAP1SecR3t"
export const MYGX_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCgKkNSKVIxuHEd\n" +
    "AxX9m0qDOSKHwt6UbFSksDd/dTRoAC6jWDKC158zp7WGcPl5x9ZY5glWgYkLPXqW\n" +
    "QOqjni5XGccIzObd9DLaLDpzLdslj8OuCen4PTxixDuNZyX39HNkLNZEHk5jsqnB\n" +
    "xxd3Isz3HJcY1osB+9+hEK311JhfSGDygSfBxtbeNUCUmiDhGCIHEV+8K6Y6Mvqb\n" +
    "smroqKfyNr48cqoGl+lavGWf7ABDwb2cD57OJA100wMRIBHRU1K45Ao2VJop1Wb8\n" +
    "SJIPk9cZ9rRHU6FmqjBAoVmUihRn4rGC2lQimNP+OCJMlCPD6sDrtEINZhrIx0mg\n" +
    "uVkcS/eRAgMBAAECggEAJa9L/7zxNfmrw6PCPNWZBp8e3MqhDFMg507+/+JX3lCM\n" +
    "qKpL2DVbpA/FykgyqtC2Qlx9vfjkgdyJR2kmzDCfvqa2CgAMIhUfEe5uIkOb2I6n\n" +
    "AAAdKOdfme2KBY9Lg7fknqFeGND4qMSU5J8vijyJ9WqospNoSaM1zvPZuom3AFPs\n" +
    "Bjbr5dIBSyWg8a8H+YKq8KwC4/eEUDeIvvKmREvq/69/Db6X5R43CuH1EwmAo90X\n" +
    "qW6hUd1Kue3mEjobC0Er+kBsXTarCWjYVefD35G0IXU9zdIPhrzLOtSaoObCRmIL\n" +
    "0BudWUoeaqwLRZU+kZBLcWCf12oc/dezJLsFySqIAQKBgQDQ2xi4w2pnVR4EmgcC\n" +
    "ozuDkU2y7rECEJl54gDwyI9QXBT5CsO5Ns0od7CyiIazgvSWj/CfyH2T603asDpE\n" +
    "AZ3YsGFaqyN6W0J6Sr2/WWDcskXdoeBPJkkWmT6Shtlk7jikt0HPso10sSQx7xYx\n" +
    "Xu5IUC5TusF646mWEO1ezLzgcQKBgQDEUYgkI+p+20EiwWYABHEqIB3MA7GfL7Ys\n" +
    "vtERFisEpn466d6pB70BJqG23C8d6c/zEzBIZNW/Nhos9WGh5MGkWCBLCte8ZNsD\n" +
    "jvFCjXcd8mSMfCW8OWa2UJglD6jL8ewnuIvgMo9lEL0+w+InJEIMmf6jnS+btkmU\n" +
    "itjAqogZIQKBgQCedy55uaN5BacB/NAG200jlVLryZk6JNgeFzF5f+LlKQissNMy\n" +
    "K3dcFfxWaaoyd9EWj94VjexiGC35GK8MvGFEcQdc4O7JPobg/OadUbZhnU3PTKxB\n" +
    "wZ3A7MMCMBiwMON/bqAbc7FKccExteMT0KBg851C4Dc/A4+/kdZYkGVasQKBgDyk\n" +
    "Qr2HKqRM7e3id7OBq8MrcIjYi0F0530i5Em240rocw2XuGPWNBfq6wElOpiu5MFd\n" +
    "KAj0vOH3wFYq5iGwG/C8GB2WF9XmAZEz0mqQcD8b5NtQbgeaY5PliVnJYIa/EAel\n" +
    "BfAXLhw1838z2uPkW1KxLuszXsVmpYvw58t74daBAoGAQa1zEgD99lXWjFty+iJC\n" +
    "9BR9b81hK8lJoDOdcqOj7bB6Pjx2Gi7N/gFnb5pcqtXl5liwbYXweL0IaoFlwNgX\n" +
    "ZA4HFC4v3g5citjxXwUuW3qu/MSezodjAlxkgmZO3TezEOF8lO0q6JCww0lPB9LV\n" +
    "YWZDI9KiewWKexYs2fXvkhw=\n" +
    "-----END PRIVATE KEY-----\n"

let deviceID = '3ui4u43904'

export const removeAuthAccount = () => {window.localStorage.removeItem(STORAGE_ACCOUNT)}

export const getAccessToken = window.localStorage.getItem(STORAGE_ACCESS_TOKEN)
export const saveAuthAccessToken = (token) => {window.localStorage.setItem(STORAGE_ACCESS_TOKEN, token)}
export const removeAuthAccessToken = () => {return window.localStorage.removeItem(STORAGE_ACCESS_TOKEN)}
export const Head_Authorization = {'Authorization': `Bearer ${getAccessToken||''}`}
export const isAuthorization = () => {return getAccessToken ? true : false}
export const META_PARAMETERS = {meta: {requestId: KEY_UUID, deviceId : deviceID}}


export function encryptCode() {
    const TOKEN_SECRET = MYGLOBALXTREME_SECRET + ':' + Date.now()

    const cipher = crypto.createCipheriv('aes-256-cbc', MYGLOBALXTREME_KEY, MYGLOBALXTREME_IV);
    let encrypted = cipher.update(TOKEN_SECRET, 'utf8', 'base64');
    encrypted += cipher.final('base64');

    return encrypted
}

export const configSignatureCode = (allPayload = {}) => {
    const dataUpdate = JSON.stringify(allPayload);

    let signerObject = crypto.createSign("RSA-SHA256");
    signerObject.update(dataUpdate);
    let signature = signerObject.sign({key: MYGX_PRIVATE_KEY, padding:crypto.constants.RSA_PKCS1_PSS_PADDING}, 'base64');

    return signature;
}

export const verifySignatureCode = () => {
    const dataUpdate = JSON.stringify({...META_PARAMETERS});
    let verifierObject = crypto.createVerify("RSA-SHA256");
    verifierObject.update(dataUpdate);
    let verified = verifierObject.verify({key: MYGX_PRIVATE_KEY, padding:crypto.constants.RSA_PKCS1_PSS_PADDING}, configSignatureCode(), "base64");
}

export const configHeadBody = (allPayload) => {
    return {
        ...Head_Authorization,
        'Content-Type': 'application/json',
        'MyGlobalXtreme-Secret': encryptCode(),
        'MyGlobalXtreme-Signature': configSignatureCode(allPayload)
    }
}


// THIRD PARTY MITRANS
const GX_MITRANS_CLIENT_KEY = 'SB-Mid-client-3tq1GdaGfGV_b8M'
export const callThirdPartyMidtransScript = () => {
    const script = document.createElement("script");
    script.setAttribute('src', 'https://app.sandbox.midtrans.com/snap/snap.js');
    script.setAttribute('async', 'true');
    script.setAttribute('data-client-key', GX_MITRANS_CLIENT_KEY);

    // script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    // script.async = true;
    // script['data-client-key'] = GX_MITRANS_CLIENT_KEY

    document.head.appendChild(script);
}