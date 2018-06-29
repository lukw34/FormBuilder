import React from 'react';
import PropTypes from 'prop-types';

import QuestionSchemaFormItem from '../../containers/QuestionSchemaFormItem';
import Button from '../Button';
import ContainerStyled from './ContainerStyled';

const QuestionSchemaForm = ({schemaKeys = [], addInput}) => (
    <ContainerStyled>
        {schemaKeys
            .map(({key, intend}, index) => (
                <QuestionSchemaFormItem
                    key={key}
                    index={index}
                    fieldKey={key}
                    intend={intend}
                />))}
        <Button label="Add Input" onClick={addInput} />
    </ContainerStyled>);

QuestionSchemaForm.propTypes = {
    schemaKeys: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    addInput: PropTypes.func.isRequired
};

export default QuestionSchemaForm;