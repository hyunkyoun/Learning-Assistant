import Discussion from "../DiscussionForum/DiscussionForum";
import List from "../List/List";
import User from "../UserDetail/UserDetail";
import Navbar from "../../Navbar";

import "./MainLayout.css";

const Main = () => {
    return (
        <div className = "main-layout">
            <Navbar/>
            <List/>
            <Discussion/>
            <User/>
        </div>
    )
}
export default Main