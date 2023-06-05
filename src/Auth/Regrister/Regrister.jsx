import React from 'react';
import RegisterForm from '../RegristerForm/RegristerForm';
import {useDispatch} from 'react-redux';
import { register } from '../UserSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';

const Regrister = ({closeDialog}) => {
    
    const { enqueueSnackbar } = useSnackbar();

    const dispatch = useDispatch();
    const handleTodoFormSubmit = async (values) => {
        
        try {
            const action = register(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);

            if(closeDialog){
                closeDialog();
            }

            enqueueSnackbar('Đăng ký tài khoản thành công.', { variant: 'success' });
            
        } catch (error) {
            console.log('Loi', { variant: 'error' });
        }
        

    }

    return (
        <div>
            <RegisterForm onSubmit={handleTodoFormSubmit} />
        </div>
    );
};

export default Regrister;