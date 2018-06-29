import React from 'react';
import PropTypes from 'prop-types';

import InputStyledContainer from './InputStyledContainer';
import InputStyled from './InputStyled';
import LabelStyled from './LabelStyled';

export default InputComponent => {
    const Input = props => (
        <InputStyledContainer>
            <LabelStyled>
                {props.label}
            </LabelStyled>
            <InputStyled>
                <InputComponent {...props} />
            </InputStyled>
        </InputStyledContainer>
    );

    Input.propTypes = {
        label: PropTypes.string.isRequired
    };

    return Input;
};

