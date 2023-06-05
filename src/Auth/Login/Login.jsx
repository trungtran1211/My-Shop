import React from 'react';
import {useDispatch} from 'react-redux';
import { login } from '../UserSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import LoginForm from '../LoginForm/LoginForm';

const Login = ({closeDialog}) => {
    
    const { enqueueSnackbar } = useSnackbar();

    const dispatch = useDispatch();
    const handleTodoFormSubmit = async (values) =>{
        
        try {
            const action = login(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);

            if(closeDialog){
                closeDialog();
            }
            
        } catch (error) {
            enqueueSnackbar('Email hoặc password không đúng', { variant: 'error' });
        }
        

    }

    return (
        <div>
            <LoginForm onSubmit={handleTodoFormSubmit} />
        </div>
    );
};

export default Login;