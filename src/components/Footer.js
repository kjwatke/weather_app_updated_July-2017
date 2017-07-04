import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Footer = () =>
  (<footer>
    <Navbar inverse fixedBottom>
      <Nav
        style={{
          display: 'flex',
          flexFlow: 'nowrap row',
          justifyContent: 'space-between',
        }}
      />
    </Navbar>
  </footer>);

export default Footer;
