import { Typography } from '@material-ui/core';
import { LockOpenOutlined } from '@material-ui/icons';
import { Avatar } from '@mui/material';
import React from 'react';

const RegristerForm = () => {
    return (
        <div>
            <Avatar>
                <LockOpenOutlined/>
            </Avatar>
            <Typography component="h3" variant="h5">
                Create an Account
            </Typography>
            

        </div>
    );
};

export default RegristerForm;