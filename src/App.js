import {useState} from 'react';
import './scss/reset.scss';
import './scss/global.scss';
import Header from './components/Header';
import Middle from './components/Middle';
import Footer from './components/Footer';


function App() {

  return (
    <div className="container">
      <Header />
      <Middle />
      <Footer />
    </div>
  );
}

export default App;
