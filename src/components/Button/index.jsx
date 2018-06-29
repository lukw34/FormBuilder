import React from 'react';
import PropTypes from 'prop-types';

import ButtonStyled from './ButtonStyled';

const Button = ({label, onClick}) => (
    <ButtonStyled onClick={onClick}>
        {label}
    </ButtonStyled>
);

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;