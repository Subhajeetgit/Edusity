// import React, { useState } from 'react';
// import Navbar from './Components/Navbar/Navbar';
// import Hero from './Components/Hero/Hero';
// import Programs from './Components/Programs/Programs';
// import Title from './Components/Title/Title';
// import About from './Components/About/About';
// import Campus from './Components/Campus/Campus';
// import Testimonials from './Components/Testimonials/Testimonials';
// import Contact from './Components/Contact/Contact';
// import Footer from './Components/Footer/Footer';
// import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
// import LoginModal from './Components/LoginModal/LoginModal';

// const App = () => {
//   const [playState, setPlystate] = useState(false); 

//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <div className="container">
//         <Title subTitle="Our Program" title="What we Offer" />
//         <Programs />
//         <About setPlystate={setPlystate} /> 
//         <Title subTitle="Gallery" title="Campus Photos" />
//         <Campus />
//         <Title subTitle="TESTIMONIALS" title="Listen To Our Students" />
//         <Testimonials />
//         <Title subTitle="Contact Us" title="Get in Touch" />
//         <Contact />
//         <LoginModal/>
//         <Footer />
//       </div>
      
//       <VideoPlayer playState={playState} setPlystate={setPlystate} />
//     </div>
//   );
// };

// export default App; 

import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import LoginModal from './Components/LoginModal/LoginModal';

const App = () => {
  const [playState, setPlystate] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state
  const [user, setUser] = useState(null); // Store logged-in user info

  const handleLogin = (userData) => {
    console.log('Logged in user:', userData);
    setUser(userData); // Store user info in state
    setIsModalOpen(false); // Close the modal after login/signup
  };

  // Handle closing the login modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" title="What we Offer" />
        <Programs />
        <About setPlystate={setPlystate} />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="Listen To Our Students" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />

        {/* Conditionally render the login modal if it's open */}
        {isModalOpen && <LoginModal onClose={handleCloseModal} onLogin={handleLogin} />}

        <Footer />
      </div>

      <VideoPlayer playState={playState} setPlystate={setPlystate} />
      
      {/* Button to open the Login Modal */}
      {!user ? (
        <button onClick={() => setIsModalOpen(true)}>Login / Sign Up</button>
      ) : (
        <p>Welcome, {user.name}!</p> // Display user info when logged in
      )}
    </div>
  );
};

export default App;
