import { useState } from "react"
import {db} from "fbase"
import { collection, addDoc } from "firebase/firestore"
import {useNavigate} from "react-router-dom"

const SNSForm = ({userObj}) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const navigate = useNavigate()

    const onSubmit = async (event) => {
        event.preventDefault()
        await addDoc(collection(db, "post"), {
            title: title, content: content, createAt: Date.now(), creatorId: userObj.uid,
        })
        // setTitle("")
        // setContent("")
        alert("글이 저장되었습니다.")
        navigate("/post")
    }
    return (
        <div>
            <h1>글 작성</h1>
            <div>
                <input type="text" placeholder="제목 입력" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <textarea placeholder="내용 입력" value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
            <button onClick={onSubmit}>저장</button>
        </div>
    )
}

export default SNSForm