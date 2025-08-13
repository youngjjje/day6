import { useState } from "react"
import {authService, googleProvider} from "fbase"
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

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
            setError(error.message)
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="email" type="email" placeholder="Email" required  value={email} onChange={onChange}/>
                <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
                <input type="submit" value="Log In" value={newAccount ? "Create Account" : "Log In" }/>
                {error}
            </form>
            <span onClick={toggleAccount}>
                {newAccount ? "Sign In" : "Create Account"}
            </span>
            <div>
                <button onClick={onSocialClick} name="google">Continue with Google</button>
            </div>
        </div>
    )
}


export default Auth