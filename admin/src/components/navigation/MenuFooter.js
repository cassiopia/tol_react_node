import React, {useEffect, useState} from "react";
import AuthenticationService from "../services/AuthenticationService";
import './css/style.css';

export default function MenuFooter() {

    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthenticationService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const logOut = () => {
        AuthenticationService.logout();
    };

    return (
        <>
            <div className="m-header">
                <ul className="mh-social">
                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                </ul>
                {currentUser && (
                    <>
                        <p className="mh-copy">Админка сайта</p>

                        <p className="mh-social">
                            <a href="/login" className="linkLogOut" onClick={logOut}>
                                Выйти ссылка
                            </a>
                        </p>
                    </>
                )};
            </div>
            <div className="m-hide"><i className="fa fa-plus-circle"></i></div>
        </>
    );
}