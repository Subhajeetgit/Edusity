// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-scroll'; 
// import logo from '@/assets/logo.png';
// import '@/assets/Navbar.css';

// const Navbar = () => {
//   const [sticky, setSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setSticky(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
//       <img src={logo} alt="Logo" className="logo" />
//       <ul>
//         <li>
//           <Link to="hero" smooth={true} offset={0} duration={500}>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="program" smooth={true} offset={-260} duration={500}>
//             Program
//           </Link>
//         </li>
//         <li>
//           <Link to="about" smooth={true} offset={-150} duration={500}>
//             About Us
//           </Link>
//         </li>
//         <li>
//           <Link to="campus" smooth={true} offset={-260} duration={500}>
//             Campus
//           </Link>
//         </li>
//         <li>
//           <Link to="testimonials" smooth={true} offset={-260} duration={500}>
//             Testimonials
//           </Link>
//         </li>
//         <li>
//           <Link to="contact" smooth={true} offset={-260} duration={500} className="btn">
//             Contact Us
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '@/assets/logo.png';
import '@/assets/Navbar.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [showAuthBox, setShowAuthBox] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const users = JSON.parse(localStorage.getItem('users')) || {};

    if (isSignUp) {
      if (users[email]) {
        alert('User already exists. Please log in.');
      } else {
        users[email] = { password };
        localStorage.setItem('users', JSON.stringify(users));
        alert('Sign-up successful! Please log in.');
        setIsSignUp(false);
      }
    } else {
      if (users[email] && users[email].password === password) {
        setLoggedInUser({ email });
        localStorage.setItem('loggedInUser', JSON.stringify({ email }));
        alert('Login successful!');
        setShowAuthBox(false);
      } else {
        alert('Invalid credentials. Please try again.');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
    alert('You have been logged out.');
  };

  useEffect(() => {
    const savedUser = localStorage.getItem('loggedInUser');
    if (savedUser) {
      setLoggedInUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-260} duration={500} className="btn">
            Contact Us
          </Link>
        </li>
        <li>
          {!loggedInUser ? (
            <button className="login-btn" onClick={() => setShowAuthBox(true)}>
              Login
            </button>
          ) : (
            <div className="profile-section">
              <div className="profile-icon">
                {/* Display only the user icon */}
                <i className="fas fa-user"></i>
              </div>
              <div className="profile-dropdown">
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          )}
        </li>
      </ul>

      {showAuthBox && (
        <div className="auth-box-overlay">
          <div className="auth-box">
            <h3>{isSignUp ? 'Sign Up' : 'Login'}</h3>
            <form onSubmit={handleAuthSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
              />
              <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
              <button type="button" onClick={() => setShowAuthBox(false)}>
                Cancel
              </button>
            </form>
            <p>
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <span
                className="toggle-auth"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? 'Login' : 'Sign Up'}
              </span>
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

