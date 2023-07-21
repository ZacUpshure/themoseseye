import React from 'react';

// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.utils';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./state";

import App from './App';
import './index.css';
import { Layout } from './components';

const store = configureStore({
    reducer: { cart: cartReducer }, 

})

// ReactDOM.render(<App />, document.getElementById('root')) 
const rootElement = document.getElementById('root');

render(
    <React.StrictMode>
            <Provider store={store}>
                <Elements stripe={stripePromise}>
                    <App />
                </Elements>
            </Provider>
    </React.StrictMode>,
     rootElement
);