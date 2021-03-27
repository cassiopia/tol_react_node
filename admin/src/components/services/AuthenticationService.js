import http from "../../http-common";

const registration =  data => {
    return http.post("/auth/registration", data);
};

const login = data => {
    return http.post("/auth/login", data);
};

export default {
    registration,
    login
};