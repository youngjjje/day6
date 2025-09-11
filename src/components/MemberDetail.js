import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../fbase";
import Album from "components/Album"
import AlbumModal from "components/AlbumModal"

import "../css/MemberDetail.css"

import album2 from "Image/album2.jpg"
import album3 from "Image/album3.jpg"

import SungJin from "Image/sungjin.webp"
import YounK from "Image/youngk.webp"
import WonPil from "Image/wonpil.webp"
import Dowon from "Image/dowon.webp"

const MemberDetail = () => {
    const {memberName } = useParams()
    const [memberData, setMemberData] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const [selectedAlbum, setSelectedAlbum] = useState(null)
    const albums = [
        { id: 1, image: "https://i.namu.wiki/i/6vD29qj-Kn-RvtWc78nBEBsPwEDSpp1f2U01sPziGwJ9aUdqX35gwGGwEX83oY6cK5oomc7HjeXw4Tm1kPrP506E5_gS_a8DIJ-lvvQ39nABSOJNYL68ZPAo1eEYGVhlveu2apN6ywd8y8_KZt8Ilw.webp", title: "앨범 1", description: "첫 번째 앨범 설명입니다." },
        { id: 2, image: album2, title: "앨범 2", description: "두 번째 앨범 설명입니다." },
        { id: 3, image: album3, title: "앨범 3", description: "세 번째 앨범 설명입니다." },
    ];


    useEffect(() => {
        const fetchMember = async () => {
            try {
                const docRef = doc(db, "members", memberName)
                const docSnap = await getDoc(docRef)

                if(docSnap.exists()) {
                    setMemberData(docSnap.data())
                } else {
                    setMemberData(null)
                }
            }catch (error) {
                console.error("Firestre fetch error:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchMember()
    }, [memberName])

    if(!memberData) return <p>없는 멤버입니다.</p>

    const handleAlbumClick = (album) => {
        setSelectedAlbum(album)
    }

    const handleClose = () => {
        setSelectedAlbum(null)
    }

    const members = [
            { mName: "SungJin", image: SungJin,},
            { mName: "YoungK", image: YounK,},
            { mName: "WonPil", image: WonPil,},
            { mName: "Dowon", image: Dowon,}
        ];

    const currentMember = members.find((m) => m.mName === memberName)

    return (
        <div className="member-page">                
            <div className="member-detail-container">
                { currentMember && (
                    <div className="member-banner">
                        <img src={currentMember.image} alt={currentMember.mName}/>
                    </div>
                )}
                <div className="member-info">
                    <h2>Name: {memberData.name}</h2>
                    <p>Role: {memberData.role}</p>
                    <p>Birth: {memberData.birth}</p>
                    <p>Album: {memberData.album}</p>
                    <p>Song: {memberData.song}</p>
                </div>                
            </div>
            <div className="member-bottom">
                    {albums.map((album) => (
                        <div key={album.id} onClick={() => handleAlbumClick(album)} style={{cursor: "pointer"}}>
                            <Album image={album.image} title={album.title}
                                description={album.description}  />
                        </div>
                    ))}                
            </div>
            
                <AlbumModal isOpen={!!selectedAlbum} onClose={handleClose} album={selectedAlbum} />
        </div>

        
    )
}

export default MemberDetail