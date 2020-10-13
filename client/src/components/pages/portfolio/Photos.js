import React, {useState, useEffect, useCallback} from "react";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";
import axios from 'axios';
import {useParams} from "react-router-dom";

// todo Ускорить загрузку картинок. Через кэш или др способом

export default function Photos() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [photos, setPhotos] = useState([]);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const hashYearMap = {
        2016: "nSUJArS",
        2017: "bd4URdO",
        2018: "47BjJf5",
        2019: "ReaaF1Y",
    };

    let {year} = useParams();

// todo Почему-то вызывается 4 раза....
    let albumHash = hashYearMap[year];
    console.log(albumHash);

    const openLightbox = useCallback((event, {photo, index}) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const fetchData = async () => {
        axios.get('http://localhost:3000/portfolio/get_album_images/' + albumHash)
            .then(function (response) {
                setIsLoaded(true);
                const dataFromAPI = response.data.data;
                photosMaper(dataFromAPI);
            })
            .catch(function (error) {
                setIsLoaded(true);
                setError(error);
            });
    };

    useEffect(() => {
        fetchData();
    }, [albumHash]);

    const photosMaper = dataFromAPI => {
        let photos = dataFromAPI.map(item => (
            {src: item.link, width: 4, height: 3}
        ));
        setPhotos(photos);
    };

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div>
                <Gallery photos={photos} onClick={openLightbox}/>
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        );
    }
}

