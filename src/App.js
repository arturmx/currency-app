import {useState} from 'react';
import './scss/global.scss'
import Header from './components/Header'
import Footer from './components/Footer'

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
      <Header />
      {/* <HeroSection />
      <Boxes /> */}
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;
