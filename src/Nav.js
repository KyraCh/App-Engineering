import React from "react";
import "./App.css";
import { Link } from "react-router-dom";



const Nav = ({user}) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <div className="nav">
       <span className="logo-container">
        <img src="images/UCLlogo.png" className="logo" />
        <div className="app-name"><Link className="Link" to="/main">Exercises App</Link></div>
      </span>
      {user ? (
      <ul className="list">
        <li className="image">
          <img src={user.photos[0].value}
          alt="" 
          className="avatar" />
        </li>
        <li className="listItem">{user.displayName}</li>
        <li className="link" onClick={logout}>
            Logout
          </li> 
      </ul>
      ) : (
        <Link className="Link" to="/symptom">
          About Us
        </Link>
      )}

    </div>
  );
};

export default Nav;