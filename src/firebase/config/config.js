import {initializeApp} from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyA8DGA1XI7aI9vhsfXDGHCqupV-wpePDX4",
	authDomain: "pc-techstore.firebaseapp.com",
	projectId: "pc-techstore",
	storageBucket: "pc-techstore.appspot.com",
	messagingSenderId: "208708947396",
	appId: "1:208708947396:web:61dea655516f1034eae891"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => app;
