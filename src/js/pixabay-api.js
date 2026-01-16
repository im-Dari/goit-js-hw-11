import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY ='54227747-d3c13079e82325bc2c9b382ac'

export async function getImagesByQuery(query) { 
    const response = await axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            satisfies: 'true',
        },
    });

    return response.data;
}