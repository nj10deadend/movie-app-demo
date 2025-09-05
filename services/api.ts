import isEmpty from 'lodash/isEmpty';

export const TMDB_CONFIG = {
    API_KEY: process.env.EXPO_PUBLIC_API_KEY,
    BASE_URL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
        accept: 'application/json',

    }
}

export const getMovies = async (query: string, searchParameters: any = {}) => {

    const defaultParams = new URLSearchParams();
    defaultParams.append('include_adult', 'false');
    defaultParams.append('include_video', 'false');
    defaultParams.append('language', 'en-US');
    defaultParams.append('page', '1');
    defaultParams.append('sort_by', 'popularity.desc');

    let params = defaultParams.toString();
    // console.log('Stringified default params:', params);

    // console.log('Search parameters:', searchParameters);
    // const params = new URLSearchParams({
    //     stringifiedParams,
    //     ...searchParameters,
    // });

    // const params: string | any = new URLSearchParams(stringifiedParams);
    Object.entries(searchParameters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            params.concat(key, String(value));
        }
    });

    console.log('search query in api.ts:', query);


    const endpoint: string = !isEmpty(query)
        // ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}&${params.toString()}`
        ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${TMDB_CONFIG.BASE_URL}/discover/movie?${params.toString()}`;

    // console.log('API Key:', TMDB_CONFIG.API_KEY);
    // console.log('Headers:', TMDB_CONFIG.headers);
    // console.log('Fetching from endpoint:', endpoint);
    // console.log('Final search parameters:', params);

    
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers
    });


    if (!response.ok) {
        throw new Error(`Error fetching movies: ${response.statusText}`);
    }

    const data = await response.json();
    // console.log('Fetched data:', data);
    return data.results;
}

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDc5MmFmZGJlOTQyYmE1NTUwM2M4N2QyM2EzYWQ1ZiIsIm5iZiI6MTY3MTY3ODIxOS4wOTc5OTk4LCJzdWIiOiI2M2EzYzkwYmFhNzg5ODAwN2ZlNTI0ZDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5kA-JlD44KaCVjuqaDiotPHuZ7C7XFeLHpg6hCxdvBM'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));