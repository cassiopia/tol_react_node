import http from "../../http-common";

const registration = data => {
    return http.post("/auth/registration", data);
};

const login = data => {
    return http.post("/auth/login", data)
        .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            }
        )
        .catch(e => {
            // todo Имеет смысл сделать логер
            console.log(e);
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default {
    registration,
    login,
    logout,
    getCurrentUser
};