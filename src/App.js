import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //MOST IMPORTANT
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Map from "./components/Map";
import ImageCheck from "./components/ImageCheck";
import Chatbox from "./components/Chatbot";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chatbox" element={

            <Chatbox />

            } />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/map"
            element={
              <ProtectedRoute>
                <Map />
              </ProtectedRoute>
            }
          />
          <Route
            path="/img"
            element={
              <ImageCheck/>
            }
            />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
