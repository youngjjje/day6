import { useState } from "react"
import {db} from "fbase"
import { collection, addDoc, doc, updateDoc } from "firebase/firestore"
import {useNavigate} from "react-router-dom"
import "../css/PostForm.css"

const PostForm = ({initialValue, userObj}) => {
    const [title, setTitle] = useState(initialValue?.title || "")
    const [content, setContent] = useState(initialValue?.content || "")
    const navigate = useNavigate()

    const onSubmit = async (event) => {
        event.preventDefault()

        try {
            if(initialValue) {
                // 수정
                const docRef = doc(db, "post", initialValue.id)
                await updateDoc(docRef, {
                    title, content, upDatedAt: Date.now()
                })
                alert("수정 완료됐습니다.")
            }
            else {
                // 새 글 작성
                await addDoc(collection(db, "post"), {
                    title, content, createdAt: Date.now(), creatorId: userObj?.uid,
                })
                alert("글이 저장됐습니다.")
            }

            navigate("/post")
        } catch (error) {
            console.log("오류 발생: ", error)
            alert("오류 발생했습니다.")
        }
    }

    const onCancel = () => {
        const confirmCancel = window.confirm("취소 하시겠습니까?")
        if (confirmCancel) {
            navigate("/post")
        }
    }

    return (
        <div className="postform-board-container">
            <div className="postform-board-box">
                <h1 className="board-title">{initialValue ? "글 수정" : "글 작성"}</h1>
                <div className="form-group">
                    <input className="input-title" type="text" placeholder="제목 입력" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-group">

                </div>
                <div>
                <textarea className="input-content" placeholder="내용 입력" value={content} onChange={(e) => setContent(e.target.value)} />
            </div>

            <div className="form-actions">
                <button className="save-btn" onClick={onSubmit}>{initialValue ? "수정" : "저장" }</button>
                <button className="cancel-btn" onClick={onCancel}>취소</button>
            </div>
            </div>
            
            <div>
            </div>
        </div>
    )
}

export default PostForm