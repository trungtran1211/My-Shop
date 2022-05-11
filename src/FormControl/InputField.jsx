import React from 'react';
import PropTypes from 'prop-types';
import {Controller} from 'react-hook-form'
import { TextField } from '@material-ui/core';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    lable: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const {form, name, lable, disabled} = props;
    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field:{onBlur, onChange, value, name, ref} }) => 
            <TextField 
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            inputRef={ref}
            lable={lable}
            name={name}
            fullWidth
            disabled={disabled}
            variant="outlined"
            margin="normal"
            />}
        />
    );
}

export default InputField;