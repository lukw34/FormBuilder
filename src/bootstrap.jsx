import React from 'react';
import ReactDOM from 'react-dom';
import {injectGlobal} from 'styled-components';

import App from './components/App';

injectGlobal`
    html {
        margin: 0;
        padding: 0;
        height: 100%;
    }
    body {
        height: 100%;
    }
`;

ReactDOM.render(<App />, document.getElementById('app'));