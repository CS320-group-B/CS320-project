import Flow from "./components/Track/Flow";
import { BrowserRouter, Routes, Route, UNSAFE_RouteContext, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Schedule from "./components/Schedule/Schedule";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import UserContext, { UserContextProvider } from './context/UserContext';



export default function App() {

  return (
    <UserContextProvider>
      <UserContext.Consumer>

        {({ userData, setUserData }) => {
          console.log(userData);

          return (<BrowserRouter>
            <Navbar />
            <Routes >
              <Route path="/" element={userData ? <Home /> : <Navigate replace to="/login" />} />
              <Route path="/track" element={userData ? <Flow /> : <Navigate replace to="/login" />} />
              <Route path="/schedule" element={userData ? <Schedule /> : <Navigate replace to="/login" />} />
              <Route path="/profile" element={userData ? <Profile /> : <Navigate replace to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

            </Routes>
          </BrowserRouter>);
        }}
      </UserContext.Consumer>
    </UserContextProvider>
  );
}
