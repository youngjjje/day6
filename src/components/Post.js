import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import {collection, getDocs} from "firebase/firestore"
import {db} from "../fbase"


const Post = ({userObj}) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const querySnapshot = await getDocs(collection(db, "post"))
            const postData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setPosts(postData)
        }
        fetchPosts()
    }, [])

    const handleCreate = () => {
        alert("작성페이지로 넘어가게 수정하면 돼")
    }


    return (
        <div style={{padding: "20px"}}>
            <h1>게시글 목록</h1>
            <Link to= "/post/new">
                <button>글 작성</button>
            </Link>
            
            <ul style={{marginTop: "20px"}}>
                {posts.map((post) => (
                    <li key={post.id} style={{marginBottom: "15px"}}>
                        <h3>
                            <Link to={`/post/${post.id}` } >{post.title}</Link>
                        </h3>
                        <small>
                            {post.createAt
                                ? new Date(post.createAt).toLocaleString()
                                : ""}
                        </small>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}
// isOwner={posts.createId === userObj.uid}
export default Post