import React from 'react'

const ImagePreview = (props) => {
    return (
        <div classNmae="p-media__thumb">
            <img alt="Preview Images" src={props.path} />
        </div>
    )
}

export default ImagePreview
