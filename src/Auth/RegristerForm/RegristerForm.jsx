import { Typography } from '@material-ui/core';
import { LockOpenOutlined } from '@material-ui/icons';
import { Avatar } from '@mui/material';
import React from 'react';
import InputField from '../../FormControl/InputField';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

RegristerForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegristerForm(props) {
    const form = useForm({
        defaultValues: {
            title: '',
        },
    });

    const handleSubmit = (values) => {
        console.log('sad:', values);
    }
    return (
        <div>
            <Avatar>
                <LockOpenOutlined/>
            </Avatar>
            <Typography component="h3" variant="h5">
                Create an Account
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="title" label="Todo" form={form}/>
            </form>
           
        </div>
    );
}

export default RegristerForm;