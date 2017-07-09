import React from 'react';

// Dynamic setting of date for copyright statement.
const getCurrentYear = () => new Date().getFullYear();
const urls = {
  portfolio: 'http://kevinwatke.com',
  githubRepo: 'https://github.com/kjwatke/weather_app_updated_July-2017',
  license: 'https://github.com/kjwatke/weather_app_updated_July-2017/blob/master/README.md',
};
const Footer = () =>
  (<footer className="page-footer blue-grey darken-4">
    <div className="container">
      <div className="row">
        <div
          className="col l4 offset-l2 s12"
          style={{ display: 'flex', flexFlow: 'wrap row', justifyContent: 'space-around' }}
        >
          <a href={urls.portfolio} target="_blank">
            <img className="icon" src="img/portfolio.svg" alt="portfolio icon" /> Portfolio
          </a>
          <a href={urls.githubRepo} target="_blank">
            <img className="icon" src="img/github.svg" alt="github logo" /> Repo
          </a>
          <a href={urls.license} target="_blank">
            <img className="icon" src="img/license.svg" alt="license icon" /> License
          </a>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="grey-text text-lighten-1 container center-align">
        <img className="icon" src="img/cpyright.svg" alt="copyright logo" /> {getCurrentYear()}{' '}
        Kevin Watke
      </div>
    </div>
  </footer>);

export default Footer;
