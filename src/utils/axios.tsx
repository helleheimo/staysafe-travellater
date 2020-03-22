import Axios from 'axios';

const isProd = process.env.NODE_ENV === 'production';
const baseURL = isProd ? 'https://staysafe.valpashotels.net/api' : 'http://localhost:3000/api'

export default Axios.create({ baseURL });