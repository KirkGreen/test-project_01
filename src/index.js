import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise'

import reducers from './reducers'

import UsersList from "./components/usersList";

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDom.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="container">
            <UsersList/>
        </div>
    </Provider>
    , document.getElementById('root'));