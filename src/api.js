import axios from "axios"

const api =  axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "3e9b4be43d881eef145bee9bac37ae54",
        language: "en-US"
    }
})


export const movieApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular")

}

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today")
}