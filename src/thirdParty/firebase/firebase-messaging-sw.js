// import firebase from "firebase";
// import "firebase/messaging";
import {messaging} from './config'

messaging.requestPermission()
    .then(function () {
        console.log('Have permission');

        return messaging.getToken();
    })
    .then(function(token) {
        console.log('See Token: ', token);
    })
    .catch(function () {
        console.log('Error Catch');
    })