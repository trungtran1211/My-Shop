import { Button, LinearProgress, Typography } from '@material-ui/core';
import { LockOpenOutlined } from '@material-ui/icons';
import { Avatar } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import InputField from '../../FormControl/InputField';
import PasswordField from '../../FormControl/PasswordField'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        paddingTop: theme.spacing(4),    
    },

    avatar: {
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main,
    },

    title: {
        margin: theme.spacing(2, 0, 3, 0),
        textAlign: 'center',
    },

    submit: {
        margin: theme.spacing(3, 0, 2, 0),
    },
    proress:{
        position: 'absolute',
        top: theme.spacing(1),
        left: 0,
        right: 0,
    },
}));


LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm(props) {
    //style css
    const classes = useStyles();

    //Validate form
    const schema = yup.object({
        email: yup.string().required('Vui lòng điền email của bạn')
        .email('Vui lòng điền đúng email'),
        password: yup.string().required('Vui lòng nhập mật khẩu'),
    });

    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(schema)
    });

    const handleSubmit = async (values) => {
        const {onSubmit} = props;
        if(onSubmit){
           await onSubmit(values);
        }
        form.reset();

    }
    const {isSubmitting} = form.formState;
    return (
        <div className={classes.root}>
            {isSubmitting && <LinearProgress className={classes.proress}/>}

            <Avatar className={classes.avatar}>
                <LockOpenOutlined/>
            </Avatar>
            <Typography className={classes.title} component="h3" variant="h5">
                Sign in
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="email" label="Email" form={form}/>
                <PasswordField name="password" label="Password" form={form}/>
                <Button disabled={isSubmitting} type="submit" className={classes.submit} variant="contained" color="primary" size="large" fullWidth> 
                    Sign in
                </Button>
            </form>
           
        </div>
    );
}

export default LoginForm;