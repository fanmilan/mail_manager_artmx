import axios from "axios";

const url = 'http://localhost:8000/api/mails/';


export const getMails = () => {
    return axios.get(url)
        .then(res => res.data);
}

export const createMail = (data) => {
    return axios.post(url, data)
        .then(res => res.data);
}
