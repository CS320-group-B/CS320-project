import { useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation();
  const routes = [{ name: 'Home', path: '/' }, { name: 'My Schedules', path: '/Schedule' }, { name: 'Profile', path: '/Profile' }, { name: 'Track', path: '/Track' }, { name: 'Login', path: '/Login' }];
  return (
    <div>
      <ul id="nav" className="py-4 shadow-md flex px-6">
        {routes.map((item) => {
          const active = location.pathname === item.path ? 'bg-black text-white rounded-lg' : ''
          return <li className={"px-4 py-2 " + active}><a href={item.path}>{item.name}</a></li>
        })}



      </ul>
    </div>
  );
}

export default Navbar