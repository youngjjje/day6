import  {HashRouter as Router, Route, Routes} from "react-router-dom"
import Auth from "routes/Auth"
import Home from "routes/Home"
import Navigation from "./Navigation"
import NavigationMenu from "./NavigationMenu"
import Profile from "routes/Profile"
import Member from "./Member"
import MemberDetail from "./MemberDetail"
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
                        <Route path="/member/:memberName" element={<MemberDetail />} />
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