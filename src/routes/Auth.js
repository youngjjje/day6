import { useState } from "react"
import {authService, googleProvider} from "fbase"
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import "../css/Auth.css"

const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newAccount, setNewAccount] = useState(true)
    const [error, setError] = useState("")

    const onChange = (event) =>{
        const {
            target: {name, value}
        } = event
        if (name ==="email") {
            setEmail(value)
        } else if (name === "password") {
            setPassword(value)
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            if (newAccount) {
            // 회원가입
            await createUserWithEmailAndPassword(authService, email, password);
            } else {
            // 로그인
            await signInWithEmailAndPassword(authService, email, password);
            }
        } catch (error) {
            setError(error.message)
        }
    };

    const toggleAccount = () => setNewAccount((prev) => !prev)

    const onSocialClick = async (event) => {
        const { name} = event.target
        try {
            if (name === "google") {
                const provider =  new GoogleAuthProvider()
                const result = await signInWithPopup(authService, provider)
                console.log(result.user)
            }
        } catch (error) {
            if (error.code === "auth/popup-closed-by-user") {
                console.log("구글 로그인 팝업을 닫았습니다")
            } else {
                console.error(error.message)
            }
        }
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="login-title">Day6 HomePage</h1>

                <form onSubmit={onSubmit} className="login-form">
                    <input name="email" type="email" placeholder="Email" required  value={email} onChange={onChange}/>
                    <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
                    <input type="submit" className="login-btn" value={newAccount ? "Create Account" : "Log In" }/>
                    {error}
                </form>
                <button className="toggle-account" onClick={toggleAccount}>
                    {newAccount ? "Sign In" : "Create Account"}
                </button>
                <button className="google-btn" onClick={onSocialClick} name="google">
                    <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo"/>
                        Continue with Google</button>

            </div>            
        </div>
    )
}


export default Auth