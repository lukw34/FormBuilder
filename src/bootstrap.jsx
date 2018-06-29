import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {injectGlobal} from 'styled-components';
import 'babel-polyfill';
import store from './store';
import App from './containers/App';

injectGlobal`
    html {
        margin: 0;
        padding: 0;
        height: 100%;
    }
`;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);