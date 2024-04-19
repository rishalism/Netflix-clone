const api_key = import.meta.env.VITE_APP_API_KEY;
const baseUrl = "https://api.themoviedb.org/3"

const endPoints = {
    popular: `${baseUrl}/movie/popular?api_key=${api_key}`,
    topRated: `${baseUrl}/movie/top_rated?api_key=${api_key}`,
    trending: `${baseUrl}/movie/popular?api_key=${api_key}&language=en-US&page=2`,
    comedy: `${baseUrl}/search/movie/popular?api_key=${api_key}&language=en-US&query=comedy&page=2&include_adult=false`,
    upcoming: `${baseUrl}/movie/upcoming?api_key=${api_key}`
}


export function createImageURl(filename, size) {
    return `https://image.tmdb.org/t/p/${size}/${filename}`;
}

export default endPoints;