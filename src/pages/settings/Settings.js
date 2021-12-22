import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"
import Setting from "../../components/settings/Setting"

const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <Setting />
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
