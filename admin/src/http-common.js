import axios from "axios";

// todo Очень хочется прикрутить https://www.npmjs.com/package/axios-cache-adapter
// todo и ещё поиграть с информацией отсюда https://nuancesprog.ru/p/11916/

const http = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        "Content-type": "application/json"
    }
});

export default http;