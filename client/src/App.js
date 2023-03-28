import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <p>
          Welcome to Major Planner, an app to help you plan your course schedules
        </p>
      </header>
    </div>
  );
}

export default App;
