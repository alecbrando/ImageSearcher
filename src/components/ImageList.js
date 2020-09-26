import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard';
export default function ImageList(props) {
    return (
        <div className="image-list">
            {props.images.map((image) => {
                return (
                    <ImageCard key={image.id} image={image}/>
                )
            })}
        </div>
    )
}
