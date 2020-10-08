import React, {useEffect, useState} from "react";
import axios from "axios";

// todo Сформировать качественный массив картинок

export const usePhotosFromApi = albumHash => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [photos, setPhotos] = useState([{width: 4, height: 3, src:""}]);

    console.log(albumHash);

    // useEffect(() => {
    //     axios.get('http://localhost:3000/portfolio/get_album_images/'+ albumHash)
    //         .then(function (response) {
    //             setIsLoaded(true);
    //             //setData(response.data.data);
    //
    //             const dataFromAPI = response.data.data;
    //             dataMaper(dataFromAPI);
    //             // dataFromAPI.map(item => (
    //             //     setPhotos(state => ({...state, src: item.link}))
    //             // ));
    //
    //         })
    //         .catch(function (error) {
    //             setIsLoaded(true);
    //             setError(error);
    //            // console.log(error);
    //         });
    //
    // }, []);


    // const fetchData = async () => {
    //     const result = axios.get('http://localhost:3000/portfolio/get_album_images/'+ albumHash)
    //         .then(function (response) {
    //             setIsLoaded(true);
    //
    //             const dataFromAPI = response.data.data;
    //             dataMaper(dataFromAPI);
    //             setIsLoaded(false);
    //          })
    //         .catch(function (error) {
    //             setIsLoaded(true);
    //             setError(error);
    //         });
    //     // setData(result.data);
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);
    //
    // const dataMaper = dataFromAPI => {
    //     dataFromAPI.map(item => (
    //         setPhotos(state => ([{...state, src: item.link}]))
    //     ));
    // };

    // useEffect(() => {
    //     //setPhotos(state => ([{...state, src: '7777777777'}]))
    //     setPhotos(state => ([{width: 4, height: 3, src:"7777777777"}]));
    // }, []);


   // return photos;

function TestTmp() {
    return 'testtmp';
    // setPhotos(state => ([{width: 4, height: 3, src:"7777777777"}]))
}

    return TestTmp();


};

