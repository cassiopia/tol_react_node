import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import Breadcrumbs from "../../breadcrumbs/Breadcrumbs";

export default function AlbumDetails() {
    // todo Предусмотреть ссылку для возврата к списку альбомов
    // todo Подумать стоит ли это обозначать в меню
    return (
        <>
            <Breadcrumbs title="Информация об альбоме" link="albom-details"/>
            <div className="row" data-animated="0">
                <div className="col-md-12">
                    <div id="m-blog-content">
                        оролролрлорлорло
                    </div>
                </div>
            </div>
        </>
    );
}