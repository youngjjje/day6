import  {HashRouter as Router, Route, Routes} from "react-router-dom"
import Auth from "routes/Auth"
import Home from "routes/Home"
import Navigation from "./Navigation"
import Profile from "routes/Profile"
import SungJin from "components/Member/sungjin";
import YoungK from "components/Member/youngk";
import WonPil from "components/Member/wonpil";
import DoWon from "components/Member/dowon";
import Post from "components/Post"
import PostForm from "components/PostForm"
import PostRd from "components/PostRd"


const AppRouter= ({isLoggedIn, userObj}) => {

    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route path="/" element={<><Home /><Profile /></>} />
                        <Route path="/SungJin" element={<SungJin />} />
                        <Route path="/YoungK" element={<YoungK />} />
                        <Route path="/WonPil" element={<WonPil />} />
                        <Route path="/DoWon" element={<DoWon />} />
                        <Route path="/post" element={<Post />} />
                        <Route path="/post/new" element={<PostForm userObj={userObj}/>} />
                        <Route path="/post/:id" element={<PostRd userObj={userObj}/>} />
                    </>

                ) : (
                    <Route path="/" element={<Auth />} />
                )}

            </Routes>
        </Router>
    )
}

export default AppRouter