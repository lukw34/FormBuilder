import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import schemaSaga from './saga';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(schemaSaga);

export default store;