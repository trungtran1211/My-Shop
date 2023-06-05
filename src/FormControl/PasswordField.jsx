import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Controller} from 'react-hook-form'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { FormHelperText } from '@material-ui/core';

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function PasswordField(props) {
    //nhận dữ liệu từ form
    const {form, name, label, disabled} = props;
    //validate form với yub
    const {formState: { errors }} = form;
    const hasserror = !!errors[name];

    const [showPassword, setShowPassword] = useState();

    const handleClickShowPassword = () => {
        setShowPassword(x => !x);
    }

    return (
        <>
            <FormControl error={!!hasserror} fullWidth margin="normal" variant="outlined">
                <InputLabel htmlFor={name}>{label}</InputLabel>
                <Controller
                    name={name}
                    control={form.control}
                    render={({ field:{onBlur, onChange, value,name, ref} }) => 
                    <OutlinedInput 
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        id={name}
                        type={showPassword ? 'text' : 'password'}
                        label = {label}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        disabled={disabled}
                    />}
                />
                
            <FormHelperText error={!!hasserror}>{errors[name]?.message}</FormHelperText>
            </FormControl>
        </>
    );
}

export default PasswordField;