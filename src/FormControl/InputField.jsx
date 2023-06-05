import React from 'react';
import PropTypes from 'prop-types';
import {Controller} from 'react-hook-form'
import { TextField } from '@material-ui/core';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    //nhận dữ liệu từ form
    const {form, name, label, disabled} = props;
    //validate form với yub
    const {formState: { errors }} = form;
    const hasserror = errors[name];


    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field:{onBlur, onChange, value,name, ref} }) => 
            <TextField 
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            inputRef={ref}
            label={label}
            name={name}
            fullWidth
            disabled={disabled}
            variant="outlined"
            margin="normal"

            error = {!!hasserror}
            helperText ={errors[name]?.message}
            />}
        />
    );
}

export default InputField;