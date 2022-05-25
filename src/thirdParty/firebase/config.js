import firebase from "firebase";
import "firebase/messaging";

firebase.initializeApp({
    apiKey: "AIzaSyAhSXprSHYyPOIfa1NPXHe5PPN2Q88nsn0",
    authDomain: "gxappcustomer.firebaseapp.com",
    projectId: "gxappcustomer",
    storageBucket: "gxappcustomer.appspot.com",
    messagingSenderId: "994223498077",
    appId: "1:994223498077:web:055b53adf1538082c43eb4",
    measurementId: "G-ECJ016V0WY"
});
firebase.analytics();

export const messaging = firebase.messaging();