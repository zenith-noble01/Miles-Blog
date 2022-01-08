import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"
import Setting from "../../components/settings/Setting"
import {Outlet} from "react-router-dom"

const Settings = ({profile, setProfile}) => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <Setting profile={profile} setProfile={setProfile} Outlet={Outlet}/>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
