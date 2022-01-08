import React from "react";
import "./rightsetting.css";
// import Profile from '../profile/Profile'
import Modal from "../modal/Modal";
import TobeSeen from "../Tobeseen/TobeSeen";

const RightSetting = ({ modal, setModal, profile, setProfile, Outlet }) => {
  return (
    <>
      {modal ? (
        <Modal
          setModal={setModal}
          modal={modal}
          profile={profile}
          setProfile={setProfile}
        />
      ) : (
        ""
      )}
      <div className="rightSetting">

        <TobeSeen Outlet={Outlet} setProfile={setProfile} profile={profile} />
        <Outlet />
      </div>
    </>
  );
};

export default RightSetting;
