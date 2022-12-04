import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {getFirestoreApp} from './firebase/config/config';
import App from './App';
import './index.css';

getFirestoreApp();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      	<App />
    </React.StrictMode>
);

reportWebVitals();
