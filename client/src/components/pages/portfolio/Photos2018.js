import React, {useState, useEffect, useCallback} from "react";
import {render} from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";
//import {usePhotosFromApi} from "./use-photos-from-api";
import axios from 'axios';


function App() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);


    // todo Использовать эти переменные
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [photos, setPhotos] = useState([]);

    let albumHash = "ReaaF1Y";

    const openLightbox = useCallback((event, {photo, index}) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

      // todo Подумать как сделать вытаскивание по годам одним файлом

    const fetchData = async () => {
        const result = axios.get('http://localhost:3000/portfolio/get_album_images/' + albumHash)
            .then(function (response) {
                setIsLoaded(true);

                const dataFromAPI = response.data.data;
                dataMaper(dataFromAPI);
                setIsLoaded(false);
            })
            .catch(function (error) {
                setIsLoaded(true);
                setError(error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const dataMaper = dataFromAPI => {

        let photos = dataFromAPI.map(item => (
            {src: item.link, width: 4, height: 3}
        ));

        setPhotos(photos);
    };

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

render(<App/>, document.getElementById("content"));

