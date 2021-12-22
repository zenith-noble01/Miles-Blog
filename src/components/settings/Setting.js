import React from 'react'
import LeftSettings from '../leftSettings/LeftSettings'
import RightSetting from '../rightSetting/RightSetting'
import "./setting.css"

const Setting = () => {
    return (
        <div className="setting">
            <LeftSettings />
            <RightSetting />
        </div>
    )
}

export default Setting
