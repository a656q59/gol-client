import axios from 'axios';


const instance = axios.create({
    baseURL:"https://gol-server-bda09.web.app"
});

export default instance;