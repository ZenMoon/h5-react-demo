import React from 'react';
import ReactDOM from 'react-dom';
// import '/css/reset.css'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'
import store from './store'
import {Provider} from 'react-redux'
ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
                , document.getElementById('root'));
serviceWorker.unregister();
