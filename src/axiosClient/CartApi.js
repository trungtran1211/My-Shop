import http from "./http";

const getAll = (id) => {
    return http.get(`cart/show/${id}`);
}
const addCart = (id, mand) => {
    return http.post(`cart/ad/${id}`,  JSON.stringify(mand));
}
const exportObject = {
    getAll,
    addCart,
};

export default exportObject;