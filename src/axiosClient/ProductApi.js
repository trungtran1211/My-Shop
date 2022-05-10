import http from "./http";


const  getAll = () => {
        return http.get('/')
    }

const exportObject = {
    getAll,
};

export default exportObject;