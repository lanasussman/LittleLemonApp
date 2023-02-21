import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from './components/Main';
import Nav from './components/Nav';
import React from 'react';

function App() {
  return (
    <div className='App'>
      <main>
      <Header />
      <Nav />
      <Main />
      <Footer />
      </main>
      </div>
  );
}

export default App;
