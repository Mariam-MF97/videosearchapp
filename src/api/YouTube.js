import axios from 'axios';

const KEY = 'AIzaSyAE9b62nMP6nzDCHtqTI-4gswpbBsSNylE';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video',
    }
});