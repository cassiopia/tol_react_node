import React from 'react';
import Breadcrumbs from '../../breadcrumbs/Breadcrumbs';
import AlbumsList from "./AlbumsList";

export default function Portfolio() {

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
