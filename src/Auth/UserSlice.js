import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from '../axiosClient/UserApi';

export const register = createAsyncThunk('users/register', async payload => {
    const data = await userApi.postRegrister(payload);
    localStorage.setItem('user', JSON.stringify(data.data));
    return data.data;
});

export const login = createAsyncThunk('users/login', async payload => {
    const data = await userApi.postLogin(payload);
    localStorage.setItem('user', JSON.stringify(data.data));
    return data.data;
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem('user')) || {},
        settings: {},
    },
    reducers: {
        logout(state){
            localStorage.removeItem('user');
            state.current = {}
        }
    },
    extraReducers: {
        [register.fulfilled]: (state, action) =>{
            state.current = action.payload;
        },
        [login.fulfilled]: (state, action) =>{
            state.current = action.payload;
        }
    }
});

const {actions, reducer} = userSlice;
export const { logout } = actions;
export default reducer;