import React from 'react'
import img1 from "../images/download (1).jpg"
import img2 from "../images/download (2).jpg"
import img3 from "../images/download.jpg"
import { useState } from 'react'

function ChangeImage() {

    const [imageSrc, setImageSrc] = useState(img1);

    const handleTurnOn = () => {
        setImageSrc(img2);
    };

    const handleTurnOff = () => {
        setImageSrc(img3);
    };
  return (
    <div>
          <button onClick={handleTurnOn}>Turn on</button>
            <img id="myImage" src={imageSrc} style={{ width: '100px' }} alt="Switchable" />
            <button onClick={handleTurnOff}>Turn off</button>
    </div>
  )
}

export default ChangeImage
