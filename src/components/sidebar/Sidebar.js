import "./sidebar.css"
import Recent from "../recent/Recent"
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__recent">
                <p className="title">Recent Posts</p>
                <Recent />
                <Recent />
                <Recent />
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                    <li className="sidebarListItem">Movie</li>
                    <li className="sidebarListItem">Gift</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
