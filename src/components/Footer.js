import React from 'react';
import { Navbar, Button, Nav, NavItem, ButtonToolbar } from 'react-bootstrap';

const Footer = () => {
  const urls = {
    portfolio: 'http://kevinwatke.com',
    gitRepo: 'https://www.github.com/kjwatke/weather_app_updated_July-2017',
    // FIXME: Replace README.md with name of License file when it gets added.
    license: 'https:/www.github.com/kjwatke/weather_app_updated_July-2017/blob/master/README.md',
  };

  return (
    <footer>
      <Navbar inverse fixedBottom>
        <Nav
          style={{
            display: 'flex',
            flexFlow: 'nowrap row',
            justifyContent: 'space-between',
          }}
        >
          <Button bsStyle="link" href={urls.portfolio} target="_blank" rel="noopener noreferrer">
            Portfolio
          </Button>
          <Button bsStyle="link" href={urls.gitRepo} target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </Button>
          <Button bsStyle="link" href={urls.license} target="_blank" rel="noopener noreferrer">
            MIT License
          </Button>
        </Nav>
      </Navbar>
    </footer>
  );
};

export default Footer;
