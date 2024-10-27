import Discussion from "../DiscussionForum/DiscussionForum";
import List from "../List/List";
import User from "../UserDetail/UserDetail";

import "./MainLayout.css";

const Main = () => {
    return (
        <div className = "main-layout">
            <List/>
            <Discussion/>
            <User/>
        </div>
    )
}
export default Main