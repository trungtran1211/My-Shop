import http from "./http";
const tokenApi = JSON.parse(localStorage.getItem('user')) || {};
const token = tokenApi.token; 

const  postRegrister = (data) => {
    return http.post('/regrister', data);
}

const  postLogin = (data) => {
    return http.post('/login1', data);  
}

const  getUser = () => {
    return http.get(`/userinfo/?token="${token}"`);  
}
const exportObject = {
    postRegrister,
    postLogin,
    getUser,
};

export default exportObject;