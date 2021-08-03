import React from 'react'

const ImageContainer = ({source, alt}) => {
    return (
        <div className='image-container'>
            <img src={source} alt={alt}></img>
        </div>
    )
}

export default ImageContainer
