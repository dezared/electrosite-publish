import PhotoAlbum from "react-photo-album";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import React, { useEffect, useState } from "react";
import axios from "axios"

const photos = [
    {
        src: "",
        width: 647,
        height: 647
    },
    {
        src: "",
        width: 380,
        height: 319
    },
    {
        src: '',
        width: 513,
        height: 319
    },
    {
        src: '',
        width: 513,
        height: 312
    },
    {
        src: '',
        width: 380,
        height: 312
    }
];

export default function Gallery() {
    const [images, setImage] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://api.elitestroyservice.ru/api/application/admin/allImages?count=5'
        })
            .then(function (response) {
                response.data.forEach((element, index) => {
                    photos[index].src = element.imageUrl
                });

                console.log(photos)
                setImage(photos);

                return Promise.resolve();
            });
    }, []);

    return (
        <PhotoAlbum renderPhoto={RenderPhoto} layout="columns" columns={3} spacing={0} photos={images} />
    );
}

function RenderPhoto({ imageProps }) {
    const { src, alt, srcSet, sizes, ...restImageProps } = imageProps;
    return <Zoom><img src={src} alt={alt} {...(srcSet ? { srcSet, sizes } : null)} {...restImageProps} /></Zoom>;
};