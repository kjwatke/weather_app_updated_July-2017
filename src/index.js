import React from 'react';
import ReactDOM from 'react-dom';

// Import Header, Footer component.
import Header from './components/Header';
import Footer from './components/Footer';

const App = () =>
  (<div className="app-container">
    <Header />
    <main className="content" />
    <Footer />
  </div>);

ReactDOM.render(<App />, document.getElementById('root'));
