import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

import App from './App'
import store from "./App/redux-store";

import './index.css';

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById('root')
)
