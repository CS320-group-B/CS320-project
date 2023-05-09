// import {useState, useEffect} from "React";
import Flow from "./components/Track/Flow";
import { BrowserRouter, Routes, Route, UNSAFE_RouteContext } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Schedule from "./components/Schedule/Schedule";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";


export default function App() { 
  // const [session, setSession] = useState(getSessionCookie());
  // useEffect(
  //   () => {
  //     setSession(getSessionCookie());
  //   },
  //   [session]
  // );
  return (
  <UserContextProvider>  
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/track" element={<Flow />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}
