import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "dfa2e2ac3b1b4186885541f23a013288"
    }
})