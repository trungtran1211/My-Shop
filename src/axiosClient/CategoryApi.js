import http from "./http";


const  getAll = () => {
    return http.get('/getcate');
}
const getCateDetails = (id) => {
    return http.get(`/category/${id}`);
}
const exportObject = {
    getAll,
    getCateDetails
};

export default exportObject;