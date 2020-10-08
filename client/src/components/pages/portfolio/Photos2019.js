// import React, {useState, useCallback, Component} from "react";
// import { render } from "react-dom";
// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
// import { PhotosExample } from "./PhotosExample";
//
// const [currentImage, setCurrentImage] = useState(0);
// const [viewerIsOpen, setViewerIsOpen] = useState(false);
//
//
// function App() {
//     const [currentImage, setCurrentImage] = useState(0);
//     const [viewerIsOpen, setViewerIsOpen] = useState(false);
//
//     const openLightbox = useCallback((event, { photo, index }) => {
//         setCurrentImage(index);
//         setViewerIsOpen(true);
//     }, []);
//
//     const closeLightbox = () => {
//         setCurrentImage(0);
//         setViewerIsOpen(false);
//     };
//
//     return (
//         <div>
//             <Gallery photos={PhotosExample} onClick={openLightbox} />
//             <ModalGateway>
//                 {viewerIsOpen ? (
//                     <Modal onClose={closeLightbox}>
//                         <Carousel
//                             currentIndex={currentImage}
//                             views={PhotosExample.map(x => ({
//                                 ...x,
//                                 srcset: x.srcSet,
//                                 caption: x.title
//                             }))}
//                         />
//                     </Modal>
//                 ) : null}
//             </ModalGateway>
//         </div>
//     );
// }
// render(<App />, document.getElementById("content"));
//
//
//
//

import React, {useState, useCallback} from "react";
import {render} from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";
import {PhotosExample} from "./PhotosExample";

function App() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
            <Gallery photos={PhotosExample} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={PhotosExample    .map(x => ({
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
render(<App />, document.getElementById("content"));
