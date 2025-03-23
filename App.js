import {BrowserRouter, Routes, Route, useNavigate, Link} from 'react-router-dom';
import React, {useState} from 'react';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const users = [{email : "aarushban15@gmail.com", password: "1234"}, {email : "aarush@gmail.com", password: "5678"}];

function Signup({setAuth}) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleSignup = () => {
    if(!email || !password) {
      setError("Invalid Email or password");
    } else if(users.find(u => u.email === email)) {
      setError("This Account Already Exists");
    } else {
      users.push({email: email, password: password});
      localStorage.setItem("isAuthenticated", "true");
      setAuth(true);
      navigate("/Dashboard");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        {error && <p className="error">{error}</p>}
        <input
          className="input-field"
          type="email"
          placeholder="Enter Email"
          onChange={(e) => { setEmail(e.target.value) }}
        />
        <input
          className="input-field"
          type="password"
          placeholder="Enter Password"
          onChange={(e) => { setPassword(e.target.value) }}
        />
        <button className="signup-btn" onClick={handleSignup}>Sign Up</button>
        <p className="signup-link">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}


function Login({setAuth}) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  

  const handleLogin = () => {
    const user = users.find(u => u.email === email && u.password === password);
    if(user) {
      localStorage.setItem("isAuthenticated", "true");
      setAuth(true);
      navigate("/Dashboard");
    } else {
      setError("Invalid Email or password");
    }
    
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <input
          className="input-field"
          type="email"
          placeholder="Enter Email"
          onChange={(e) => { setEmail(e.target.value) }}
        />
        <input
          className="input-field"
          type="password"
          placeholder="Enter Password"
          onChange={(e) => { setPassword(e.target.value) }}
        />
        <button className="login-btn" onClick={handleLogin}>Login</button>
        <p className="signup-link">
          Don't have an account? <Link to="/Signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

function Dashboard({setAuth}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setAuth(false);
    navigate("/");
  } 

  return (
    <div>
      <Navbar />
      <div className="hero d-flex align-items-center justify-content-center text-center">
        <div className="hero-content">
          <h1 className="display-3 text-white fw-bold">Welcome to Tasty Bites</h1>
          <p className="lead text-white">Enjoy fresh flavors crafted with love. A taste of perfection in every bite.</p>
          <Link className="btn btn-warning btn-lg m-2" to="/menu">View Menu</Link>
          <br/>
          <button className="btn btn-light btn-lg m-2" onClick={handleLogout}>Logout</button>
        </div>
       </div>  
      </div>
      
  );
}
 

function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") === "true");
  return (
    <BrowserRouter>
      

      <Routes>
        <Route path='/' element={isAuthenticated ? <navigate to="/Dashboard"/> : <Login setAuth = {setIsAuthenticated}/>}/>
        <Route path='/Dashboard' element={isAuthenticated ? <Dashboard setAuth = {setIsAuthenticated}/> : <navigate to="/"/>}/>
        <Route path='/Signup' element={<Signup setAuth = {setIsAuthenticated}/>}/>
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/about' element={<AboutUs />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App; 