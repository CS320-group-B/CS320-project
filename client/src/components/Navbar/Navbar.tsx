import useLocalStorage from "use-local-storage";
import { useLocation } from 'react-router-dom'
import {UserContext} from "../../context/UserContext"
import {useContext} from "react";

function Navbar() {
  const user = sessionStorage.getItem("user")? JSON.parse(sessionStorage.user) : null;
  // const { userData, setUserData } = useContext(UserContext);
  const location = useLocation();
  const routes = [{ name: 'Home', path: '/' }, { name: 'My Schedules', path: '/Schedule' }, { name: 'Profile', path: '/Profile' }, { name: 'Track', path: '/Track' }, { name: 'Login', path: '/Login' },{ name: 'Signup', path: '/Signup' }];
  const logout = () => {sessionStorage.removeItem("user"); window.location.reload();}
  // const logout = () => {setUserData(null)}
  return (
    <div>
      <ul id="nav" className="py-4 shadow-md flex px-6 border-b-1 border-black">
        {routes.map((item) => {
          const active = location.pathname === item.path ? 'bg-black text-white rounded-lg' : ''
          return <li className={"px-4 py-2 " + active}><a href={item.path}>{item.name}</a></li>
        })}
        <h1 className={"px-4 py-2 "}> {user?.email}</h1>
        <button onClick = {logout}> Logout</button>
      </ul>
    </div>
  );
}

export default Navbar