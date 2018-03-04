import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
