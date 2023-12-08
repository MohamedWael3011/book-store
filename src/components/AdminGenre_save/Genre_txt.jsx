import React from "react";
import './Genre_text.css';
import {Link} from 'react-router-dom'

const AddGenre = (props) => {
    const {title} = props.genre;
    return (
            <div className="genre">
            <h3 className="nameOfGenre">{title}</h3>
            {/* <h3 className="nameOfGenre">test</h3> */}
            </div>
    )
}
export default AddGenre