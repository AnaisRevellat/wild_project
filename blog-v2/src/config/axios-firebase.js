import axios from 'axios';

const instance = axios.create({
    baseURL:'https://blog-wild-v2-default-rtdb.europe-west1.firebasedatabase.app/'

});

export default instance;