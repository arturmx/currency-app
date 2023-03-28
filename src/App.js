import './scss/global.scss'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <input value="0" />
      <select>
        <option value="eur">EUR</option>
        <option value="pln">PLN</option>
        <option value="usd">USD</option>
      </select>
      <input value="0" />
      <select>
        <option value="eur">EUR</option>
        <option value="pln">PLN</option>
        <option value="usd">USD</option>
      </select>
      <Footer />
    </div>
  );
}

export default App;
