import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.utils';

import App from './App';
import './index.css';

// ReactDOM.render(<App />, document.getElementById('root')) 
const rootElement = document.getElementById('root');

render(
    <React.StrictMode>
        <Elements stripe={stripePromise}>
            <App />
        </Elements>
    </React.StrictMode>,
     rootElement
);