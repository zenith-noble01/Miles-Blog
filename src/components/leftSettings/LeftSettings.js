import { Link } from "react-router-dom"
import "./leftsettings.css"

const LeftSettings = () => {
    // const {path, url} = useRouteMatch()
    return (
        <div className="leftSettings">
            <li className="settingtList__item not">Account</li>
            <ul className="settingList">
                <Link to="/setting/profile">
                    <li className="settingtList__item">Profile</li>
                </Link>
                <li className="settingtList__item">Notification</li>
                <Link to="/setting/authentication">
                    <li className="settingtList__item">Authentication</li>
                </Link>
            </ul>
        </div>
    )
}

export default LeftSettings
