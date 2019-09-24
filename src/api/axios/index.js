import axios from 'axios'
const Axios = axios.create({
    baseURL:"https://shopapi.smartisan.com/",
    timeout:4000
})
export default Axios