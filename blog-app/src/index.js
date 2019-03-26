import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import * as serviceWorker from './serviceWorker';

const initState = {
    loading: false,
    blogs: []
}
const blogReducer = (state = initState, action) => {
    switch (action.type) {
        case 'BLOG_REQUEST':
            return { ...state, loading: true }
        case 'BLOG_REQUEST_SUCCESS':
            return { ...state, loading: false, blogs:action.payload }

        default:
            return state;
    }
}
const store = createStore(blogReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
