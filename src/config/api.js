import axios from 'axios';

// ddf5af5309b1e67e890410fccc76406b
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY1YWY1MzA5YjFlNjdlODkwNDEwZmNjYzc2NDA2YiIsInN1YiI6IjYyMmQxNWJmMmFmYjI1MDA0NTZiNWY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vuiV4fMiO1gSJNzFXV5sXaEdYm3NmgsIZIArch51N-A
// https://api.themoviedb.org/3/movie/550?api_key=ddf5af5309b1e67e890410fccc76406b

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    },
};

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    https: config
});

export default api;
