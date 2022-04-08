import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import App from './App'
import store from "./App/redux-store";

import './index.css';

ReactDOM.render(
    <BrowserRouter basename='/my-constanta-app'>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)
