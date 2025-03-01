import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Register />
      
    </div>
  );
}

export default App;
