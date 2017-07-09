import React from 'react';

import Logo from './Logo';

const Header = () =>
  (<div className="navbar-fixed">
    <nav className="green darken-4">
      <div className="nav-wrapper">
        <Logo className="brand-logo" />
      </div>
    </nav>
  </div>);
export default Header;
