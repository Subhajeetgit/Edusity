// import React, { useState } from 'react';

// import '@/assets/LoginModal.css';

// const LoginModal = ({ onClose, onLogin }) => {
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     const userData = { name: email.split('@')[0], email }; // Example user data
//     onLogin(userData);
//   };

//   const handleSignUpSubmit = (e) => {
//     e.preventDefault();
//     const newUser = { name, email, password };
//     // Save user info in local storage
//     localStorage.setItem('user', JSON.stringify(newUser));
//     onLogin(newUser);
//   };

//   return (
//     <div className="login-modal">
//       <div className="modal-content">
//         <button className="close-button" onClick={onClose}></button>
//         <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
//         {isSignUp ? (
//           <form onSubmit={handleSignUpSubmit}>
//             <input
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button type="submit">Sign Up</button>
//           </form>
//         ) : (
//           <form onSubmit={handleLoginSubmit}>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button type="submit">Login</button>
//           </form>
//         )}
//         <p>
//           {isSignUp ? (
//             <>
//               Already have an account?{' '}
//               <span
//                 className="toggle-link"
//                 onClick={() => setIsSignUp(false)}
//               >
//                 Login
//               </span>
//             </>
//           ) : (
//             <>
//               Not a user?{' '}
//               <span
//                 className="toggle-link"
//                 onClick={() => setIsSignUp(true)}
//               >
//                 Sign Up Now
//               </span>
//             </>
//           )}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;


import React, { useState } from 'react';
import '@/assets/LoginModal.css';

const LoginModal = ({ onClose, onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const userData = { name: email.split('@')[0], email, password }; // Include password
    onLogin(userData);
  };
  
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, password }; 
  
    
    localStorage.setItem(email, JSON.stringify({ password }));
  

    localStorage.setItem('user', JSON.stringify(newUser));
    onLogin(newUser);
  };

  return (
    <div className="login-modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>

        {/* Sign-up form */}
        {isSignUp ? (
          <form onSubmit={handleSignUpSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        ) : (
        
          <form onSubmit={handleLoginSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        )}

        {/* Toggle between login and sign-up */}
        <p>
          {isSignUp ? (
            <>
              Already have an account?{' '}
              <span className="toggle-link" onClick={() => setIsSignUp(false)}>
                Login
              </span>
            </>
          ) : (
            <>
              Not a user?{' '}
              <span className="toggle-link" onClick={() => setIsSignUp(true)}>
                Sign Up Now
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
