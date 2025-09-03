import { useState } from "react"
import {db} from "fbase"
import { collection, addDoc, doc, updateDoc } from "firebase/firestore"
import {useNavigate} from "react-router-dom"

const PostForm = ({initialValue, onCancel, userObj}) => {
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
    return (
        <div>
            <h1>{initialValue ? "글 수정" : "글 작성"}</h1>
            <div>
                <input type="text" placeholder="제목 입력" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <textarea placeholder="내용 입력" value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
            <button onClick={onSubmit}>{initialValue ? "수정" : "저장" }</button>
            {initialValue && <button onClick={onCancel}>취소</button>}
        </div>
    )
}

export default PostForm