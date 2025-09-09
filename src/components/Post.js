import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import {collection, getDocs} from "firebase/firestore"
import {db} from "../fbase"
import "../css/Post.css"


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
        <div className="board-container">

            <div className="board-box">
                <h1 className="board-title">게시판</h1>
                <ul className="post-list">
                    {posts.map((post) => (
                        <li key={post.id} className="post-item">
                            <span className="post-writer">{post.writer}</span>
                            <span className="post-title">
                                <Link to={`/post/${post.id}`}>{post.title}</Link>
                            </span>
                            <span className="post-date">
                                {post.createAt ? new Date(post.createAt).toLocaleString() : ""}
                            </span>
                        </li>
                    ))}
                </ul>
                <div className="write-btn-wrapper">
                    <Link to="/post/new" className="write-btn">글 작성</Link>
                </div>
            </div>
            
            <div className="pagination">
                <button className="arrow">&lt;</button>
                {[...Array(10)].map((_, i) => (
                    <button key={i + 1} className="page-btn">
                        {i + 1}
                    </button>
                ))}
                <button className="arrow">&gt;</button>
            </div>
        </div>
        
    )
}

export default Post