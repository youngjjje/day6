import React from "react"

const Album = ({image, title, description, reverse}) => {

    return (
        <div style={{display: "flex", alignItems: "center", marginBottom: "20px",
                        flexDirection: reverse ? "row-reverse" : "row"}}>
            <img src={image} alt={title}
                style={{width: "150px", height: "150px", objectFit: "cover", marginRight: "20px"}} />
            
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Album