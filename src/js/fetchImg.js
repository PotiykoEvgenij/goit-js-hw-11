import axios from 'axios';

const API_KEY = "35640714-89aec83ac50fbde9100978e6e";
const BASE_URL = "https://pixabay.com/api/";

export const fetchImages = async (searchQuery, page) => {
    try {
        const { data } = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: searchQuery,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                per_page: 40,
                page,
            },
        });
        const { hits, totalHits } = data;
        return { hits, totalHits };
    } catch (error) {
        throw error;
    }
};