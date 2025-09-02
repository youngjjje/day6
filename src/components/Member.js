import React from "react"
import {Link} from "react-router-dom"


const Member = ({name, path}) => {
    
    return (
        <Link to={path}>
            <button style={{width: "100px", height: "100px", margin: "10px"}}>
                {name}
            </button>
        </Link>
    )
}

export default Member