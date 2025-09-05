import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationMenu from "components/NavigationMenu"
import HomeImage from "components/HomeImage"
import Member from "components/Member"
import MemberDetail from "components/MemberDetail"
import Album from "components/Album"
import { useState } from "react"
import AlbumModal from "components/AlbumModal"

// 앨범 이미지
import album1 from "Image/album1.jpg"
import album2 from "Image/album2.jpg"
import album3 from "Image/album3.jpg"

const Home = () => {

    const albums = [
            { id: 1, image: album1, title: "앨범 1", description: "첫 번째 앨범 설명입니다." },
            { id: 2, image: album2, title: "앨범 2", description: "두 번째 앨범 설명입니다." },
            { id: 3, image: album3, title: "앨범 3", description: "세 번째 앨범 설명입니다." },
        ];

    const [selectedAlbum, setSelectedAlbum] = useState(null)

    const handleAlbumClick = (album) => {
        setSelectedAlbum(album)
    }

    const handleClose = () => {
        setSelectedAlbum(null)
    }

    return (
        <>
            <HomeImage />

            <Routes>
                <Route path="/" element={<Member />} />
                <Route path="/member/:memberName" element={<MemberDetail />} />
            </Routes>
            
            <div>
                {albums.map((album) => (
                    <div key={album.id} onClick={() => handleAlbumClick(album)} style={{cursor: "pointer"}}>
                        <Album image={album.image} title={album.title}
                            description={album.description}  />
                    </div>
                ))}
                
            </div>
            <AlbumModal isOpen={!!selectedAlbum} onClose={handleClose} album={selectedAlbum} />
        </>
    )
}




export default Home