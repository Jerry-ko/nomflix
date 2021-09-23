import axios from "axios"

const api =  axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "3e9b4be43d881eef145bee9bac37ae54",
        language: "en-US"
    }
})

export default api