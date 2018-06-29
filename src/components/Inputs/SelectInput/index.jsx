import React from 'react';
import PropTypes from 'prop-types';

import SelectInputStyled from './SelectInputStyled';

const SelectInput = ({
    name, value, onChange, options
}) => (
    <SelectInputStyled type="text" name={name} value={value} onChange={onChange}>
        {options.map(({value: val, label}) => (<option key={val} value={val}>{label || val}</option>))}
    </SelectInputStyled>
);

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default SelectInput;