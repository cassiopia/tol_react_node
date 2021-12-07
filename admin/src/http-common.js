import axios from "axios";
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
    maxAge: 15 * 60 * 1000
});

const http = axios.create({
    adapter: cache.adapter,
    baseURL: "http://localhost:3000/",
    headers: {
        "Content-type": "application/json"
    },
});

export default http;