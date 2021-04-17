import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import image from './img/image0.jpg'; 
const Home = () => {
  const auth = useContext(AuthContext);
  console.log("authenticated? ", auth.isAuthenticated())
  return (
    <>
      <nav>
        {auth.isAuthenticated()?
        <Link to='/user'>User</Link>:
        <Link to='/login'>Login</Link> 
        }
      </nav>
      <div >
        <div >
          <img src={image}
            alt="Home"
          />
        </div>
        <h1>
          Web Application Development
        </h1>
        <h2>
          Demo application that we will go thru and develope!
        </h2>
      </div>
    </>
  );
};

export default Home;
