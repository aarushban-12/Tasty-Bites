import {BrowserRouter, Routes, Route, useNavigate, Link} from 'react-router-dom';
import React, {useState} from 'react';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import JobOpenings from './components/Jobs';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const users = [{email : "aarushban15@gmail.com", password: "1234"}, {email : "aarush@gmail.com", password: "5678"}];

function Signup({ setAuth }) {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    if (!name || !age || !gender || !email || !password || !confirmPassword) {
      setError("All fields are required");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else if (users.find(u => u.email === email)) {
      setError("This Account Already Exists");
    } else {
      users.push({ name, age, gender, email, password });
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
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input-field"
          type="number"
          placeholder="Enter Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <select className="input-field" onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          className="input-field"
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-field"
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="input-field"
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
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


function Dashboard({ setAuth }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setAuth(false);
    navigate("/");
  };

  return (
    <div>
      <Navbar />


      <div className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Welcome to <span className="highlight">Tasty Bites</span></h1>
          <p>Enjoy fresh flavors crafted with love. A taste of perfection in every bite.</p>
          <div className="buttons">
            <Link className="btn btn-primary" to="/menu">View Menu</Link>
            <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>


      <section className="featured">
        <h2>Popular Dishes</h2>
        <div className="dish-container">
          <div className="dish">
            <img src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg" alt="Burger" />
            <h3>Gourmet Burger</h3>
            <p>Juicy, handcrafted patty with fresh ingredients.</p>
          </div>
          <div className="dish">
            <img src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" alt="Pizza" />
            <h3>Classic Pizza</h3>
            <p>Wood-fired, crispy crust with rich toppings.</p>
          </div>
          <div className="dish">
            <img src="https://static01.nyt.com/images/2025/01/17/multimedia/CR-Lemony-Hummus-Pasta-wtkj/CR-Lemony-Hummus-Pasta-wtkj-threeByTwoMediumAt2X.jpg" alt="Pasta" />
            <h3>Italian Pasta</h3>
            <p>Authentic flavors in every bite.</p>
          </div>
        </div>
      </section>


      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-container">
          <div className="testimonial">
            <p>"The best food experience I've ever had! Highly recommend Tasty Bites!"</p>
            <h4>- Emily R.</h4>
          </div>
          <div className="testimonial">
            <p>"Amazing flavors, fresh ingredients, and great service. A must-try!"</p>
            <h4>- James W.</h4>
          </div>
          <div className="testimonial">
            <p>"A taste of perfection! The ambiance and food are top-notch."</p>
            <h4>- Sophia L.</h4>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Experience the Taste</h2>
        <p>Join us today and explore the world of delicious flavors.</p>
        <Link className="btn btn-primary" to="/menu">Order Now</Link>
      </section>
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
        <Route path='/jobs' element={<JobOpenings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
