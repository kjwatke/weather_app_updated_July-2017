import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import Logo from './Logo';
import Search from './Search';

const Header = () => {
  const styles = {
    background: '#006400',
    margin: '0',
  };

  return (
    <nav className="nav-container">
      <Navbar fluid inverse collapseOnSelect staticTop style={styles}>
        <Navbar.Header>
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <Search />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};
export default Header;
