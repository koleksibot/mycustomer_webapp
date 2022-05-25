import crypto from 'crypto'
import { v4 as uuidv4 } from 'uuid'
import {MYGLOBALXTREME_KEY, MYGLOBALXTREME_IV, MYGLOBALXTREME_SECRET, MYGX_PRIVATE_KEY} from '../config/apiKey'

export const keyUUID = uuidv4()
const deviceID = '3ui4u43904'

export const META_PARAMETERS = {
    meta: {
        requestId: keyUUID,
        deviceId : deviceID
    }
}

export const encryptCode = () => {
    const TOKEN_SECRET = MYGLOBALXTREME_SECRET + ':' + Date.now()
    const cipher = crypto.createCipheriv('aes-256-cbc', MYGLOBALXTREME_KEY, MYGLOBALXTREME_IV);
    let encrypted = cipher.update(TOKEN_SECRET, 'utf8', 'base64');
    encrypted += cipher.final('base64');

    return encrypted
}

export const signatureCode = (payload = {}) => {
    const dataUpdate = JSON.stringify(payload);
    const signerObject = crypto.createSign("RSA-SHA256");
    signerObject.update(dataUpdate);

    return signerObject.sign({key: MYGX_PRIVATE_KEY, padding:crypto.constants.RSA_PKCS1_PSS_PADDING}, 'base64');
}

