import React from 'react';
import './backButton.css';
import backbutton from "../../components/assets/ArrowCircleRight.png"

const BackButton = () => {
    return (
        <div className="BackButton">
                <p className="back">Back</p>
                <img className="arrow" src={backbutton}/>
        </div>
    )
}
export default BackButton