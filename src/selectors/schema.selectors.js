import {createSelector} from 'reselect';
import getPath from '../utils/getPath';

const getSchema = state => state.schema;

const getFieldKey = (state, props) => props.fieldKey;

export const selectRootSchemaKeys = createSelector(
    getSchema,
    schema => {
        const keys = [];
        const getKeys = function getKeys(chunk, intend = 0) {
            Object.keys(chunk).map(key => chunk[key]).forEach(({key, properties}) => {
                keys.push({
                    key, intend
                });
                if (properties && Object.keys(properties).length > 0) {
                    getKeys(properties, intend + 1);
                }
            });
        };
        getKeys(schema.toJS());
        return keys;
    }
);

export const selectItemValue = createSelector(
    getSchema,
    getFieldKey,
    (schema, key) => {
        const field = schema.getIn(getPath(key)).toJS() || {};
        const properties = field.properties || {};
        return {
            ...field,
            question: field.description,
            propertiesCount: Object.keys(properties).length
        };
    }
);

export const selectCondition = createSelector(
    getSchema,
    getFieldKey,
    (schema, key) => {
        const keys = key.split('.');
        if (keys.length > 1) {
            const actualCondition = schema.getIn([...getPath(key), 'condition']);
            const parentType = schema.getIn([...keys.slice(0, keys.length - 1).join('.properties.').split('.'), 'type']);
            return {
                value: actualCondition,
                parentType
            };
        }
        return {};
    }
);