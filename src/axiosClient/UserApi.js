import { useEffect } from "react";
import http from "./http";

const  postRegrister = (data) => {
    return http.post('/regrister', data);
}

const  postLogin = (data) => {
    return http.post('/login1', data);  
}
const  getUser = (token) => {
    return http.get(`/user-info?token="${token}"`);  
}
const exportObject = {
    postRegrister,
    postLogin,
    getUser,
};

export default exportObject;