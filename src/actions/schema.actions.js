export const SET_SCHEMA = 'builder/SET_SCHEMA';
export const ADD_ITEM = 'builder/ADD_ITEM';
export const CHANGE_ITEM_QUESTION = 'builder/CHANGE_ITEM_QUESTION';
export const CHANGE_ITEM_CONDITION = 'builder/CHANGE_ITEM_CONDITION';
export const CHANGE_ITEM_TYPE = 'builder/CHANGE_ITEM_TYPE';
export const DELETE_ITEM_TYPE = 'builder/DELETE_ITEM';

export const setSchema = schema => ({
    type: SET_SCHEMA,
    schema
});

export const addItem = (key, condition) => ({
    type: ADD_ITEM,
    key,
    condition
});

export const changeItemQuestion = (key, question) => ({
    type: CHANGE_ITEM_QUESTION,
    key,
    question
});

export const changeItemType = (key, type) => ({
    type: CHANGE_ITEM_TYPE,
    key,
    questionType: type
});

export const deleteItem = key => ({
    type: DELETE_ITEM_TYPE,
    key
});

export const changeCondition = (key, condition) => ({
    type: CHANGE_ITEM_CONDITION,
    key,
    condition
});