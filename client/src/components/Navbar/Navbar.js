import "./Navbar.css";

function Navbar () {
    return (
        <div>
          <ul id="nav">
            <li><a href="/">Home</a></li>
            <li><a href="/Schedule">My Schedules</a></li>
            <li><a href="/Profile">Profile</a></li>
          </ul>
        </div>
    );
}

export default Navbar