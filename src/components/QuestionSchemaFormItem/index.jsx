import React from 'react';
import PropTypes from 'prop-types';

import {TEXT_FIELD, RADIO_FIELD, NUMBER_FIELD} from '../../constants';
import {SelectInput, TextInput} from '../Inputs';
import Button from '../Button';
import Condition from '../Condition/index';
import ButtonContainerStyled from './ButtonContainerStyled';
import ContainerStyled from './ContainerStyled';

class QuestionSchemaFormItem extends React.Component {
    static propTypes = {
        fieldKey: PropTypes.string.isRequired,
        changeItemQuestion: PropTypes.func.isRequired,
        changeItemType: PropTypes.func.isRequired,
        question: PropTypes.string,
        type: PropTypes.string.isRequired,
        intend: PropTypes.number,
        addInput: PropTypes.func.isRequired,
        itemsCount: PropTypes.number,
        condition: PropTypes.shape({}),
        changeCondition: PropTypes.func.isRequired,
        deleteInput: PropTypes.func.isRequired
    };

    static defaultProps = {
        question: '',
        intend: 0,
        itemsCount: 0,
        condition: {}
    };

    onQuestionChange = ({target: {value: question}}) => {
        const {fieldKey, changeItemQuestion} = this.props;
        changeItemQuestion(fieldKey, question);
    };

    onTypeChange = ({target: {value: type}}) => {
        const {fieldKey, changeItemType} = this.props;
        changeItemType(fieldKey, type);
    };

    addSubInput = () => {
        const {addInput, fieldKey, itemsCount} = this.props;
        addInput(`${fieldKey}.${itemsCount}`, `${fieldKey} === `);
    };

    deleteInput = () => {
        const {fieldKey, deleteInput} = this.props;
        deleteInput(fieldKey);
    };

    options = [{
        label: 'Yes / No',
        value: RADIO_FIELD
    }, {
        label: 'Text',
        value: TEXT_FIELD
    }, {
        label: 'Number',
        value: NUMBER_FIELD
    }];

    render() {
        const {
            intend, fieldKey, question, type, condition: {value, parentType}, changeCondition
        } = this.props;
        return (
            <ContainerStyled intend={intend}>
                {intend > 0 && (
                    <Condition
                        label="Condition"
                        value={value}
                        type={parentType}
                        changeCondition={changeCondition}
                        fieldKey={fieldKey}
                    />)}
                <TextInput
                    value={question}
                    onChange={this.onQuestionChange}
                    name={`${fieldKey}-question`}
                    label="Question"
                />
                <SelectInput
                    value={type}
                    onChange={this.onTypeChange}
                    name={`${fieldKey}-type`}
                    options={this.options}
                    label="type"
                />
                <ButtonContainerStyled>
                    <Button label="Add Sub-Input" onClick={this.addSubInput} />
                    <Button label="Delete" onClick={this.deleteInput} />
                </ButtonContainerStyled>
            </ContainerStyled>
        );
    }
}


export default QuestionSchemaFormItem;