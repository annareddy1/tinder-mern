import axios from "axios";

const instance = axios.create({
    baseURL: 'https://tinder-backend-2002.herokuapp.com'
})

export default instance;