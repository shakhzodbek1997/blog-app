import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";

import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle"> Update your Account</span>
          <span className="settingsDeleteTitle"> Delete Account</span>
        </div>

        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://shakhzodbek.com/static/media/me.9b8085c797e90dbcb3fd.jpg"
              alt="profile pic"
              className=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{display: "none"}}/>
          </div>
          <label>Username: </label>
          <input type="text" placeholder="First Name"/>
          <label>Email: </label>
          <input type="email" placeholder="yourname.email@gmail.com"/>
          <label>Password: </label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
