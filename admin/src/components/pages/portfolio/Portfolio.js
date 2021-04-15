import React from 'react';
import Breadcrumbs from '../../breadcrumbs/Breadcrumbs';
import AlbumsList from "./AlbumsList";
import {useHistory} from "react-router-dom";
import AuthenticationService from "../../services/AuthenticationService";

export default function Portfolio() {

    let history = useHistory();

    const user = AuthenticationService.getCurrentUser();

    if (!user) {
        history.push('/login');
    }

    return (
        <>
            <Breadcrumbs title="Портфолио" link="portfolio"/>
            <div className="row" data-animated="0">
                <div className="col-md-12">
                    <div id="m-blog-content">
                        <AlbumsList/>
                    </div>
                </div>
            </div>
        </>
    );
}
