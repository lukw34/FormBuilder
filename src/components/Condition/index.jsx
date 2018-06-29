import React from 'react';
import PropTypes from 'prop-types';

import SelectInput from '../../components/Inputs/SelectInput';
import TextInput from '../../components/Inputs/TextInput';
import InputHoc from '../../components/Inputs/InputHOC';

import {NUMBER_FIELD, TEXT_FIELD, RADIO_FIELD} from '../../constants';
import ConditionStyled from './ConditionStyled';
import InputStyled from './InputStyled';

const selectProps = {
    [NUMBER_FIELD]: [{
        label: 'Equals',
        value: '==='
    }, {
        label: 'Greater than',
        value: '>'
    }, {
        label: 'Less than',
        value: '<'
    }],
    [TEXT_FIELD]: [{
        label: 'Equals',
        value: '==='
    }],
    [RADIO_FIELD]: [{
        label: 'Equals',
        value: '==='
    }]
};

class Condition extends React.Component {
    static propTypes = {
        type: PropTypes.oneOf([NUMBER_FIELD, TEXT_FIELD, RADIO_FIELD]).isRequired,
        fieldKey: PropTypes.string.isRequired,
        value: PropTypes.string,
        changeCondition: PropTypes.func.isRequired
    };

    static defaultProps = {
        value: ''
    };

    state = {
        conditionType: '',
        text: '',
        parent: ''
    };

    static getDerivedStateFromProps(props) {
        const {value} = props;
        const [parent, conditionType, text] = value.split(' ');

        return {
            parent,
            conditionType,
            text
        };
    }

    onSelectChange = ({target: {value}}) => {
        const {text, parent} = this.state;
        const {changeCondition, fieldKey} = this.props;
        changeCondition(fieldKey, `${parent} ${value} ${text}`);
    };

    onTextChange = ({target: {value}}) => {
        const {conditionType, parent} = this.state;
        const {changeCondition, fieldKey} = this.props;
        changeCondition(fieldKey, `${parent} ${conditionType} ${value}`);
    };

    render() {
        const {type, fieldKey} = this.props;
        const {text, conditionType} = this.state;
        return (
            <ConditionStyled>
                <InputStyled>
                    <SelectInput
                        name={`${fieldKey}-conditionType`}
                        options={selectProps[type]}
                        value={conditionType}
                        onChange={this.onSelectChange}
                    />
                </InputStyled>
                <InputStyled>
                    <TextInput name={`${fieldKey}-conditionText`} value={text} onChange={this.onTextChange} />
                </InputStyled>
            </ConditionStyled>
        );
    }
}

export default InputHoc(Condition);

