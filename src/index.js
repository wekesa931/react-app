import React from 'react'
import ReactDOM from 'react-dom'
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore)
 
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers )}>
        <App/>
    </Provider>, document.querySelector('#root'));