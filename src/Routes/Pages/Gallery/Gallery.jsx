import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import img1 from '../../../assets/event pic/1.jpg'
import img2 from '../../../assets/event pic/2.jpg'
import img3 from '../../../assets/event pic/3.jpg'
import img4 from '../../../assets/event pic/4.jpg'
import img6 from '../../../assets/event pic/6.jpg'

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export default function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href="img/img1.jpg">
                    <img alt="img1" src='https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=2048x2048&w=is&k=20&c=t9_zg20wVbrBoGn0tw__1fFq4ykeKs15TQQ3x-ehVC0=' />
                </a>
                <a href="img/img1.jpg">
                    <img alt="img1" src='https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg' />
                </a>
                <a href="img/img1.jpg">
                    <img alt="img1" src={img3} />
                </a>
                <a href="img/img1.jpg">
                    <img alt="img1" src='https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg' />
                </a>
                <a href="img/img1.jpg">
                    <img alt="img1" src='https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=2048x2048&w=is&k=20&c=t9_zg20wVbrBoGn0tw__1fFq4ykeKs15TQQ3x-ehVC0=' />
                </a>
                <a href="img/img1.jpg">
                    <img alt="img1" src={img6} />
                </a>
                ...
            </LightGallery>
        </div>
    )
}
