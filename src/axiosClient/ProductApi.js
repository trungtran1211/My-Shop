import http from "./http";


const  getAll = () => {
    return http.get('/')
}
const getSearch = (data) => {
    return http.get(`/search/?result=${data}`);
}
const getDetail = (id) => {
    return http.get(`/detail/${id}`);
}
//get slider
const getSlider = () =>{
    return http.get('/slider');
}

const exportObject = {
    getAll,
    getSearch,
    getSlider,
    getDetail
};
  
export default exportObject;