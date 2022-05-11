import React from 'react';
import RegisterForm from '../RegristerForm/RegristerForm';

const Regrister = () => {

    const handleTodoFormSubmit = (values) =>{
        console.log('form:', values);
    }

    return (
        <div>
            <RegisterForm onSubmit={handleTodoFormSubmit} />
        </div>
    );
};

export default Regrister;