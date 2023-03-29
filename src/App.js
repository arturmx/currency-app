import {useState} from 'react';
import './scss/reset.scss';
import './scss/global.scss';
import "./fonts/fonts.css";
import "./fonts/Roboto-Bold.ttf";
import "./fonts/Roboto-Regular.ttf";
import "./fonts/Roboto-Medium.ttf";
import Header from './components/Header';
import Middle from './components/Middle';
import Footer from './components/Footer';


function App() {
  const [isDark, setIsDark] = useState(false);

  const makeDark = function() {
    setIsDark(true);
  }

  const makeLight = function() {
    setIsDark(false);
  }

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Middle />
        <Footer isDark={isDark} />
      </div>
      
    </div>
  );
}

export default App;
