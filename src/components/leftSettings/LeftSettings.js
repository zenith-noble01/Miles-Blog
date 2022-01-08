import { NavLink } from "react-router-dom"
import "./leftsettings.css"

const LeftSettings = ({modal, setModal}) => {
    // const {path, url} = useRouteMatch()
    return (
        <div className="leftSettings">
            <li className="settingtList__item not">Account</li>
            <ul className="settingList">
                <NavLink to="/setting/profile">
                    <li className="settingtList__item">Profile</li>
                </NavLink>
                <NavLink to="/setting/auth">
                    <li className="settingtList__item">Authentication</li>
                </NavLink>
                <NavLink to="/setting/themes">
                    <li className="settingtList__item">Themes</li>
                </NavLink>
                <li className="settingtList__item" onClick={() => setModal(!modal)}>Deactivate</li>
            </ul>
        </div>
    )
}

export default LeftSettings
