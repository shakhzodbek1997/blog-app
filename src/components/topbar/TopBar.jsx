import React from "react";
import './topbar.css'
import { Link } from "react-router-dom";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">Home</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">About</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">Contact</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">Write</Link>
          </li>
          <li className="topListItem">
            {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img
              className="topImg"
              src="https://shakhzodbek.com/static/media/me.9b8085c797e90dbcb3fd.jpg"
              alt="Avatar"
            />
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">Login</Link>
              </li>
              <li>
                <Link className="link" to="/register">Register</Link>
              </li>
            </ul>
          )
        }
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
