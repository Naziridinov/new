import React from  "react";  
import Logo from './../asets/img/logo3.png';

function Header() {
  return (
    <div className='container header-wrapper'>
          <div className="header-logo">
              <img src={Logo} />
          </div>
          <div className="header-men">
              <a href='/'>Home</a>
              <a href='/'>About</a>
              <a href='/'>Services</a>
              <a href='/'>Blog</a>
          </div>
          <div>
              <button>Contacts</button>
          </div>
      </div>
  )
}

export default Header 