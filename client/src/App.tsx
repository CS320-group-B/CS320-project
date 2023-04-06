import Flow from "./components/Track/Flow";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Schedule from "./components/Schedule/Schedule";
import Login from "./components/Login/Login";
import Signin from "./components/Signin/Signin";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/track" element={<Flow />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />

      </Routes>

    </BrowserRouter>
  );
}
