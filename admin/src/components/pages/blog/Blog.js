import React from 'react';
import Breadcrumbs from '../../breadcrumbs/Breadcrumbs';
import ArticlesList from "./ArticlesList";
import AuthenticationService from "../../services/AuthenticationService";
import {useHistory} from "react-router-dom";

export default function Portfolio() {

    let history = useHistory();

    const user = AuthenticationService.getCurrentUser();

    if (!user) {
        history.push('/login');
    }

    return (
        <>
            <Breadcrumbs title="Блог" link="blog"/>
            <div className="row" data-animated="0">
                <div className="col-md-12">
                    <div id="m-blog-content">
                        <ArticlesList/>
                    </div>
                </div>
            </div>
        </>
    );
}
