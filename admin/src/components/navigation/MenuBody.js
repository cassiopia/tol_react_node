import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import AuthenticationService from "../services/AuthenticationService";

export default function MenuBody() {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthenticationService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    return (
        <>
            {currentUser && (
                <>
                    <ul className="nav navbar-nav navbar-right menu-effect">
                        <li>
                            <Link to="/portfolio" data-hover="Портфолио">Портфолио</Link>
                        </li>
                        <li>
                            <Link to="/blog" data-hover="Блог">Блог</Link>
                        </li>
                    </ul>
                </>
            )}
        </>
    );
}