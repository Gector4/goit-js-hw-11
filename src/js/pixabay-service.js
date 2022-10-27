import axios from 'axios';

const API_KAY = '29248812-56480c4f477581b48a8b2d913';
const BASE_URL = 'https://pixabay.com/api/';

export default class PixabayApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.sumHitsLength = 0;
    }

    async axiosArticles() {
        const queryParams = {
            key: API_KAY,
            q: this.searchQuery,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: this.page,
            per_page: 40,
        };

        const response = await axios.get(BASE_URL, {
            params: queryParams,
        });
        this.incrementPage();
        return response.data;
    }

    incrementPage() {
        this.page += 1;
    }

    plusHitsLength(hitsLength) {
        this.sumHitsLength += hitsLength;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}