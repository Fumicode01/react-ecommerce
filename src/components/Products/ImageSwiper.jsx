import React from 'react'
import Swiper from 'react-id-swiper'
import NoImage from '../../assets/img/src/no_image.png'

const ImageSwiper = (props) => {

    const[params] = useState({
        pagination:{
            el:'.swiper-pagination',
            type:'bullets',
            clickable:true,
            dynamicbullets:true
        },
        navigation:{
            nextEl: '.swiper-button-next',
            prevEl: '.wiper-button-prev'
        },
        loop: true,
    })

    const images = props.images
    
    return (
        <Swiper {...params}>
            {images.length === 0 ? (
                <div className="p-media__thumb">
                    <img src={NoImage} alt="no image" />
                </div>
            ):(
                images.map(image => (
                    <div className="p-media__thumb">
                        <img src={image.path} alt="Product Images" />
                    </div>
                ))
            )}

        </Swiper>
    )
}

export default ImageSwiper
