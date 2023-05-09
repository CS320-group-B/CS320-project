import Flow from "./components/Track/Flow";
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Schedule from "./components/Schedule/Schedule";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import {UserDataType, UserContext} from "./context/UserContext"

export default function App() {
  const [userData, setUserData] = React.useState<UserDataType | null>(null);

  return (
    <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/track" element={<Flow />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </UserContext.Provider>
    </BrowserRouter>
  );
}
