import AppRouter from "components/Router"
import { useEffect, useState } from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth"
import app from "fbase"


function App() {  
  const auth = getAuth(app)
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userObj, setUserObj] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(user)
        setUserObj(user)
      } else {
        setIsLoggedIn(false)
      }
      setInit(true)
    })
  }, [auth])
  
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} /> : "initializing..." }
      <footer>&copy; {new Date().getFullYear()} Day6 </footer>
    </>
  )
}

export default App;
