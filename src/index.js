// @flow
import React from 'react';
import ReactDOM from 'react-dom';

// Import components.
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const App = () =>
  (<div className="app-container">
    <Header />
    <main className="content">
      <Main />
    </main>
    <Footer />
  </div>);

ReactDOM.render(<App />, document.getElementById('root'));
