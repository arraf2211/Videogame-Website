import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import { Button } from './Button';

function NavBar() {
  const [click, setClick]  = useState(false);
  const [button,setButton] =useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <=960){
      setButton(false);
    } else{
      setButton(true);
    }
  };

  // Is used so that the sign up button doesnt show up when refreshing 
  useEffect(() =>{
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <> 
      <nav className='NavBar'>
        <div className='NavBar-container'>
          <Link to="/" className="NavBar-logo" onClick={closeMobileMenu}> 
            Home <i className='fa-solid fa-gamepad'/> {/* I is the icon used for the Home  */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar