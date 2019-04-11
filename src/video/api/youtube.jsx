import axios from 'axios';

const KEY="AIzaSyCpVtCAEmV0LoqmA1b-Dddps9DwbFZOUlk";

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key : KEY
    } 
});