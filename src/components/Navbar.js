import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import '../App.css'

function Navbar() {
  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/map">Map</Link></li>
        {!currentUser ? (
          <>
            <li><Link to="/signup">SignUp</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/chatbox">Chatbox</Link></li>
            <li><Link to="/img">Image</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li>
              <button onClick={handleLogout} style={{ background: "none", color: "white", border: "none" }}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
