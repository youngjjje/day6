import React, {useState, useEffect} from 'react';
import MainImage from "../Image/MainImage.jpg"
import MainImage2 from "../Image/MainImage2.jpg"
import MainImage3 from "../Image/MainImage3.jpg"

const HomeImage = () => {
    const images = [MainImage, MainImage2, MainImage3]
    const [current, setCurrent] = useState(0)

    const iLength = images.length

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => prev === iLength -1 ? 0 : prev + 1)
        }, 3000)
        
        return () => clearInterval(interval)
    }, [])
    
    
    return (
        <div>
            <img
                src={images[current]}
                alt="Home 이미지"
                style={{width: "1200px", height: "auto", borderRadius: "8px"}}
            />
        </div>
    )
}

export default HomeImage