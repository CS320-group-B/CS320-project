import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"
import Profile from "./components/Profile/Profile"
import Schedule from "./components/Schedule/Schedule"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/schedule" element={<Schedule />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
