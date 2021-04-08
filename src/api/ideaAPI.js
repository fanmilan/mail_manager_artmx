import axios from "axios";



const url = 'http://localhost:8000/api/ideas/';

export const getIdeas = () => {
    return axios.get(url)
        .then(res => res.data);
}

export const createIdea = (data) => {
    return axios.post(url, data)
        .then(res => res.data);
}
