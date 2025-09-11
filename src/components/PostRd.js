import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../fbase";
import {useNavigate} from "react-router-dom"
import PostForm from "./PostForm";
import "../css/PostRd.css"

const PostRd = ({onUpdated, userObj}) => {
    const {id} = useParams() // URL 파라미터로 문서 ID 가져오기
    const [post, setPost] = useState(null)
    const [editing, setEditing]  = useState(false)
    const navigate = useNavigate()
    
    const handleEditing = () => setEditing(true)
    const handleCancel = () => setEditing(false)

    useEffect(() => {
        const fetchPost = async () => {
            const docRef = doc(db, "post", id)
            const docSnap = await getDoc(docRef)
        
            if (docSnap.exists()) {
                setPost({ id: docSnap.id, ...docSnap.data()})
            } else {
                console.log("글이 없습니다.")
            }
        }
        fetchPost()
    }, [id])

    const handleDelete = async () => {
        if (window.confirm("삭제 하시겠습니까?")){
            await deleteDoc(doc(db, "post", id))
            alert("삭제되었습니다.")
            navigate("/post")
        }
    }


    if (editing) {
        return (
            <PostForm initialValue={post} userObj={userObj} onSubmit={(updatedPost) => {
                onUpdated(post.id, updatedPost)
                setEditing(false)
            }} onCancel={handleCancel} />
        )
    }

    if (!post) return <p>로딩 중</p>

    const isOwner = post.creatorId === userObj?.uid;  


    return (
        <div className="read-board-container">
            <div className="read-board-box">
                <div className="post-detail">
                    <div className="post-header">
                        <h1 className="post title">{post.title}</h1>
                        <span className="post-date">
                            {new Date(post.createAt).toLocaleDateString()}
                        </span>
                    </div>
                    <hr className="divider" />
                    <div className="post-content">
                        <p>{post.content}</p>
                    </div>                    
                </div>
                {isOwner && (
                        <div className="post-actions">
                            <button className="edit-btn" onClick={handleEditing}>수정</button>
                            <button className="delete-btn" onClick={handleDelete}>삭제</button>
                        </div>
                    )}
            </div>            
        </div>
    )
}

export default PostRd