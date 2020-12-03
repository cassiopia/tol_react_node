import React from 'react';
import Breadcrumbs from '../../breadcrumbs/Breadcrumbs';
import ArticlesList from "./ArticlesList";

export default function Portfolio() {

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
