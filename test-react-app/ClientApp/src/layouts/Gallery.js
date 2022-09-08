import Container from "../components/others/Container";
import Bar from '../components/Bar'
import HeaderText from '../components/others/HeaderText'
import FormContact from '../components/FormContact'

import PhotoAlbum from "react-photo-album";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const photos = [
    { src: "https://cdn.profi.ru/s3/b0/pfiles/9ceb17c3d296f7e7a0b4a67ef5e2682b.jpg-profi_w1500.jpg" },
    { src: "https://cdn.profi.ru/s3/b0/pfiles/187e1c6ceebd9c461b24be6f496b8ab6.jpg-profi_w1500.jpg" },
    { src: 'https://cdn.profi.ru/s3/b1/pfiles/a35a164ca1ce774b4f0436c02c9b8831.jpg-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/s3/b0/pfiles/31751d871c80524c8cf1f0f9c506da0c.jpg-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/s3/b1/pfiles/8722a1ff088f4aa873b964651e03fdaf.jpg-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/s3/b0/pfiles/2faa33836682eb5d98e5a035c1198912.jpg-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/s3/b0/pfiles/1867462a20b402baf2b758583def2a35.jpg-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/s3/b1/pfiles/a7bb8360580ae5ea813ed81573cb9a1c.jpg-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/s3/b0/pfiles/1666e659d118441069a8785a0f1f9115.jpg-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/s3/b0/pfiles/24ef1fd93ad6299d5423915419a2f947.jpg-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/s3/b0/pfiles/5daa8ff25e74b73c2c6b2f2711b6cd23.jpg-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/pfiles/KornilovEV3/a12432f4403a6348b5272bf671b569cb-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/pfiles/KornilovEV3/f4dcc1e34e97b31b3324a70864220f3c-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/pfiles/KornilovEV3/2ce93948764e9318c5742113ef87478b-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/pfiles/KornilovEV3/0f498f5303b5afdac3f8e62aa9a408fa-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/pfiles/KornilovEV3/5112feca79dce9efd7118c81f49386b0-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/pfiles/KornilovEV3/fbb8736674cada28b3773fd4e11546ad-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/pfiles/KornilovEV3/5a0553e67fb24aafb48cb6151e856f45-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/pfiles/KornilovEV3/fea85bcdf2249016d76849c13404d79f-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/pfiles/KornilovEV3/b87af5c3012c28e2b944bc82f425d151-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/pfiles/KornilovEV3/0e219e612de9e03aed394ca9f0e6b8a5-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/pfiles/KornilovEV3/d164081dc7a65f432d7d3682cd877b1d-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/pfiles/KornilovEV3/8de05c78d52a22868827575d187a7c89-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/pfiles/KornilovEV3/a832a2ac8c8b51eba6fa57270b0f9b69-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/pfiles/KornilovEV3/6dfc95dfd9663c03a781643ea0d0890b-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/pfiles/KornilovEV3/48a2f3b5afc8182726d25c085f42ae54-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/pfiles/KornilovEV3/6867511eecbdcc6ed8026fd52de6debd-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/pfiles/KornilovEV3/3812796472a7b4110c12bf425f881914-profi_w1500.jpg' },
    { src: 'https://cdn.profi.ru/pfiles/KornilovEV3/9c409a744425ece84bd70b9a27fc2c8d-profi_w1500.jpg' }
];

function GalleryPage() {
    return (
        <div>
            <div className="header finisher-header" style={{ width: '100%' }}>
                <Bar></Bar>
                <Container>
                    <HeaderText>Галлерея</HeaderText>
                    <div>
                        <PhotoAlbum renderPhoto={RenderPhoto} photos={photos} layout="masonry" columns={4} />
                    </div>
                    <HeaderText>Мы свяжемся с вами</HeaderText>
                </Container>
            </div>
            <FormContact />
            <div className='footer-outer'>
                <Container>
                    <div className='footer-outer'>
                        <p>ЭЛИТСТРОЙСЕРВИС</p>
                        <p>2022г.</p>
                    </div>
                </Container>
            </div>
        </div>
    )
}

function RenderPhoto({ imageProps }) {
    const { src, alt, srcSet, sizes, ...restImageProps } = imageProps;
    return <div className="image-gallery-outer"><Zoom><img src={src} alt={alt} {...(srcSet ? { srcSet, sizes } : null)} {...restImageProps} /></Zoom></div>;
};

export default GalleryPage;