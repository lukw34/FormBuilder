import {spawn, select, take} from 'redux-saga/effects';
import {
    CHANGE_ITEM_CONDITION,
    CHANGE_ITEM_TYPE,
    CHANGE_ITEM_QUESTION,
    ADD_ITEM,
    DELETE_ITEM_TYPE
} from './actions/schema.actions';
import {selectSchema} from './selectors/schema.selectors';

function* watchSchemaChange() {
    while (yield take([CHANGE_ITEM_CONDITION, CHANGE_ITEM_TYPE, CHANGE_ITEM_QUESTION, ADD_ITEM, DELETE_ITEM_TYPE])) {
        const schema = yield select(selectSchema);
        localStorage.setItem('schema', JSON.stringify(schema));
    }
}


function* rootSaga() {
    yield spawn(watchSchemaChange);
}

export default rootSaga;