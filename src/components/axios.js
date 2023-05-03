import axios from "axios"

const instance = axios.create ({
    baseURL: "https://csc3916-project-backend.onrender.com"
})


export default instance