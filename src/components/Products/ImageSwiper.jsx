import React from 'react';
import Swiper from 'react-id-swiper';
import NoImage from '../../assets/img/src/no_image.png'
import 'swiper/css/swiper.css'

const ImageSwiper = (props) => {
    const [params] = React.useState({
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        loop: true,
        spaceBetween: 30,
        getSwiper: (swiper) => {
            swiper.on('slideChange', () => {
                console.log(`slide changed : ${swiper.activeIndex}`);
            })
        }
    })

    const images = props.images

    return (
        <Swiper {...params}>
            {images.length === 0 ? (
                <div className="p-media__thumb">
                    <img src={NoImage} alt="No Image"/>
                </div>
            ) : (
                images.map(image => (
                    <div className="p-media__thumb" key={image.id}>
                        <img src={image.path} alt="Product Images"/>
                    </div>
                ))
            )}
        </Swiper>
    );
};

export default ImageSwiper;