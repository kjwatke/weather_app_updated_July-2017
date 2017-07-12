import React from 'react';

// Dynamic setting of date for copyright statement.
const getCurrentYear = () => new Date().getFullYear();
const urls = {
  portfolio: 'http://kevinwatke.com',
  githubRepo: 'https://github.com/kjwatke/weather_app_updated_July-2017',
  license: 'https://github.com/kjwatke/weather_app_updated_July-2017/blob/master/LICENSE.md',
};
const Footer = () =>
  (<footer className="page-footer blue-grey darken-4">
    <div className="links-container">
      <div className="grey-text text-lighten-1 cpy">
        <img className="icon" src="img/cpyright.svg" alt="copyright logo" /> {getCurrentYear()}{' '}
        <h6>Kevin Watke</h6>
      </div>
      <a className="link-item" href={urls.portfolio} target="_blank">
        <img className="icon" src="img/portfolio.svg" alt="portfolio icon" /> Portfolio
      </a>
      <a className="link-item" href={urls.githubRepo} target="_blank">
        <img className="icon" src="img/github.svg" alt="github logo" /> Repo
      </a>
      <a className="link-item" href={urls.license} target="_blank">
        <img className="icon" src="img/license.svg" alt="license icon" /> License
      </a>
    </div>
  </footer>);

export default Footer;
