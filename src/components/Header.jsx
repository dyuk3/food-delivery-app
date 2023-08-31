import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Header = () => {

  const [isLoggedin, setIsLoggedin] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  const btnName = isLoggedin ? 'logout' : 'login';
  return (
    <div className='flex fixed top-0 w-full overflow-hidden bg-white z-10 shadow-lg justify-between items-center  '>
      <div className="logo-container">
        <img className='w-52 h-36' src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="" />
      </div>
      <div className='flex items-center'>
        <ul className='flex mx-10 gap-16 '>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About us</Link></li>
          <li><Link to='/contact'>Contact us</Link></li>
          <li className='cursor-pointer' onClick={() => setIsLoggedin(!isLoggedin)}>{btnName}</li>
          {/* {isLoggedin ? <li onClick={() => setIsLoggedin(!isLoggedin)}>Logout</li> : <li onClick={() => setIsLoggedin(!isLoggedin)}>Login</li>} */}
          <li><Link to='/cart'>Cart ({cartItems.length} Items)</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;