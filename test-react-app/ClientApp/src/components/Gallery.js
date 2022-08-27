import PhotoAlbum from "react-photo-album";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const photos = [
    {
        src: "https://cdn.profi.ru/s3/b0/pfiles/9ceb17c3d296f7e7a0b4a67ef5e2682b.jpg-profi_w1500.jpg",
        width: 647,
        height: 647
    },
    {
        src: "https://cdn.profi.ru/s3/b0/pfiles/187e1c6ceebd9c461b24be6f496b8ab6.jpg-profi_w1500.jpg",
        width: 380,
        height: 319
    },
    {
        src: 'https://cdn.profi.ru/s3/b1/pfiles/a35a164ca1ce774b4f0436c02c9b8831.jpg-profi_w1500.jpg',
        width: 513,
        height: 319
    },
    {
        src: 'https://cdn.profi.ru/s3/b0/pfiles/31751d871c80524c8cf1f0f9c506da0c.jpg-profi_w1500.jpg',
        width: 513,
        height: 312
    },
    {
        src: 'https://cdn.profi.ru/s3/b1/pfiles/8722a1ff088f4aa873b964651e03fdaf.jpg-profi_w1500.jpg',
        width: 380,
        height: 312
    }
];

export default function Gallery() {
    return (
        <PhotoAlbum renderPhoto={RenderPhoto} layout="columns" columns={3} spacing={0} photos={photos} />
    );
}

function RenderPhoto({ imageProps }) {
    const { src, alt, srcSet, sizes, ...restImageProps } = imageProps;
    return <Zoom><img src={src} alt={alt} {...(srcSet ? { srcSet, sizes } : null)} {...restImageProps} /></Zoom>;
};