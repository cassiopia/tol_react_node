import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

// todo создать базу для внесения информации по альбому
// todo создать функционал для редактирования альбома
// todo навигацию сделать

export default function AlbumsList() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [albums, setAlbums] = useState([]);

    const fetchData = async () => {
        axios.get('http://localhost:3000/portfolio/get_albums')
            .then(function (response) {
                setIsLoaded(true);
                setAlbums(response.data.data);

            })
            .catch(function (error) {
                setIsLoaded(true);
                setError(error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderDiv = (albumId, albumCover, albumTitle, albumDescription) => {

        const albumImg = "https://i.imgur.com/" + albumCover + ".jpg";

        return <div key={albumId} className="col-md-6" data-animated="0">
            <div className="item" key={albumId}>
                <div className="mb-thumb">
                    <img src={albumImg} className="img-responsive" alt=""/>
                    <span className="rmore">
                         <Link to="/albom-details" data-hover="Подробнее">Подробнее</Link>
                    </span>
                </div>
                <h4><Link to="/albom-details" data-hover={albumTitle}>{albumTitle}</Link></h4>
                <p>{albumDescription}</p>
            </div>
        </div>
    };

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        console.log(albums);

        const albumList = albums.map((album, index) => {

            if ((index) % 2 === 0) {
                return renderDiv(album.id, album.cover, album.title, album.description);
            } else {
                return renderDiv(album.id, album.cover, album.title, album.description);
            }
        });

        return (

            <div className="row">

                {albumList}
                <div className="page-nav" data-animated="0">
                    <ul>
                        <li className="active"><a href="#"><span>1</span></a></li>
                        <li><a href="#"><span>2</span></a></li>
                        <li><a href="#"><span>3</span></a></li>
                    </ul>
                </div>

            </div>

        )
    }

}