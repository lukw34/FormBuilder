import {Record, fromJS, Map} from 'immutable';
import getPath from '../utils/getPath';
import createReducer from '../utils/createReducer';
import {
    ADD_ITEM,
    CHANGE_ITEM_QUESTION,
    CHANGE_ITEM_TYPE,
    CHANGE_ITEM_CONDITION,
    SET_SCHEMA,
    DELETE_ITEM_TYPE
} from '../actions/schema.actions';


const Field = new Record({
    key: '',
    description: '',
    type: 'string',
    condition: '',
    properties: Map({})
});

const addItem = (state, {key, condition}) => state.setIn(getPath(key), new Field({
    condition,
    key,
}));

const changeFieldDescription = (state, {key, question}) => state.setIn([...getPath(key), 'description'], question);

const changeItemType = (state, {key, questionType}) => {
    const fieldKey = getPath(key);
    return state.setIn([...fieldKey, 'type'], questionType);
};

const setSchema = (state, {schema}) => fromJS(schema);

const changeCondition = (state, {condition, key}) => state.setIn([...getPath(key), 'condition'], condition);

const deleteItem = (state, {key}) => state.deleteIn(getPath(key));

export default createReducer(fromJS({}), {
    [ADD_ITEM]: addItem,
    [CHANGE_ITEM_QUESTION]: changeFieldDescription,
    [SET_SCHEMA]: setSchema,
    [CHANGE_ITEM_TYPE]: changeItemType,
    [CHANGE_ITEM_CONDITION]: changeCondition,
    [DELETE_ITEM_TYPE]: deleteItem
});