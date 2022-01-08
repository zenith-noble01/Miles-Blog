import React, { useState } from "react";
import LeftSettings from "../leftSettings/LeftSettings";
import RightSetting from "../rightSetting/RightSetting";
import "./setting.css";

const Setting = ({ profile, setProfile, Outlet }) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="setting">
      <LeftSettings
        setModal={setModal}
        modal={modal}
        profile={profile}
        setProfile={setProfile}
      />
      <RightSetting
        setModal={setModal}
        modal={modal}
        profile={profile}
        setProfile={setProfile}
        Outlet={Outlet}
      />
    </div>
  );
};

export default Setting;
