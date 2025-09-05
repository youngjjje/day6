import React from "react"
import "../css/Album.css"

const Album = ({image, title, description, reverse}) => {

    return (
        <div className={`card-container ${reverse ? "row-reverse" : ""}`}>
            <img src={image} alt={title} className="card-image"/>
            
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Album