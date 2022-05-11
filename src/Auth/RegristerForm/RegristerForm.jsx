import { Button, Typography } from '@material-ui/core';
import { LockOpenOutlined } from '@material-ui/icons';
import { Avatar } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import InputField from '../../FormControl/InputField';
import PropTypes from 'prop-types';
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


RegristerForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegristerForm(props) {
    //style css
    const classes = useStyles();

    //Validate form
    const schema = yup.object({
        fullname: yup
        .string().required('Vui lòng nhập')
        .test('Nên có ít nhất hai từ','Vui lòng nhập đầy đủ họ tên của bạn', (value)=>{
        return value.split(' ').length >= 2;
        }),
        phone: yup.string().required('Vui lòng nhập số điện thoại').max(9, 'Vui lòng nhập đủ 9 số'),
        address: yup.string().required('Vui lòng nhập địa chỉ của bạn'),
        email: yup.string().required('Vui lòng điền email của bạn')
        .email('Vui lòng điền đúng email'),
        password: yup.string().required('Vui lòng nhập mật khẩu')
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            'Mật khẩu chứa ít nhất 8 ký tự, một chữ hoa số và ký tự đặc biệt'
          ),
          confirmPass: yup.string().required('Vui lòng nhập lại mật khẩu')
        .oneOf([yup.ref('password'), null], 'Mật khẩu phải trùng khớp'),
      }).required();

    const form = useForm({
        defaultValues: {
            fullname: '',
            phone: '',
            address: '',
            email: '',
            password: '',
        },
        resolver: yupResolver(schema)
    });

    const handleSubmit = (values) => {
        const {onSubmit} = props;
        if(onSubmit){
            onSubmit(values);
        }
        form.reset();
    }
    return (
        <div className={classes.root}>
            <Avatar className={classes.avatar}>
                <LockOpenOutlined/>
            </Avatar>
            <Typography className={classes.title} component="h3" variant="h5">
                Create an Account
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullname" label="Full name" form={form}/>
                <InputField name="phone" label="Phone" form={form}/>
                <InputField name="address" label="Address" form={form}/>
                <InputField name="email" label="Email" form={form}/>
                <InputField name="password" label="Password" form={form}/>
                <InputField name="confirmPass" label="Confirm Password" form={form}/>
                <Button type="submit" className={classes.submit} variant="contained" color="primary" size="large" fullWidth> 
                    Create an Account
                </Button>
            </form>
           
        </div>
    );
}

export default RegristerForm;