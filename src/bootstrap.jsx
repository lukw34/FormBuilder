import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {injectGlobal} from 'styled-components';

import store from './store';
import App from './components/App';

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