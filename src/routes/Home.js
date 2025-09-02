import NavigationMenu from "components/NavigationMenu"
import HomeImage from "components/HomeImage"
import Member from "components/Member"
import Album from "components/Album"

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

    return (
    <>
        <h1>home</h1>
        <NavigationMenu />
        <HomeImage />

        <Member name="SungJin" path="/sungjin"/>
        <Member name="YoungK" path="/youngk"/>
        <Member name="WonPil" path="/wonpil"/>
        <Member name="Dowon" path="/dowon"/>

        <div>
            {albums.map((album, index) => (
                <Album key={album.id} image={album.image} title={album.title} description={album.description}
                    reverese={index % 2 === 1 } />
            ))}
            
        </div>
        
    </>
    )
}




export default Home