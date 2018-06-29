import React from 'react';

import PropTypes from 'prop-types';

import StyledTextInput from './StyledTextInput';

const TextInput = ({name, value, onChange}) => <StyledTextInput type="text" name={name} value={value} onChange={onChange} />;

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default TextInput;