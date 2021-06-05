import React from 'react';
import './Polaroid.css';
import polaroid1 from '../assets/polaroid1.jpeg'

function Polaroid({image}) {
    console.log(image)
    return(
        <>
            <div className="cardContainer">
                <img className="imageContainer" src={image}></img>
            </div>
        </>
    )
}

export default Polaroid