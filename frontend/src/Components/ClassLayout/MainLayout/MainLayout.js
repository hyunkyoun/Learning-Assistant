import Discussion from "../DiscussionForum/DiscussionForum";
import List from "../List/List";
import User from "../UserDetail/UserDetail";

import "./MainLayout.css";

const Main = () => {
    return (
        <div className = 'container'>
            <List/>
            <Discussion/>
            <User/>
        </div>
    )
}
export default Main