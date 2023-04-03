import './middle.scss';
import UsFlag from './img/US.png';
import GbFlag from './img/GB.png';
import EuFlag from './img/EU.png';
import {useState} from 'react';

const Middle = function() {
    const option = [
        {value: 'us', text: 'USD'},
        {value: 'gb', text: 'GBP'},
        {value: 'eu', text: 'EUR'},
      ];
const [selected, setSelected] = useState(option[0].value)
const handleChange = event => {
    setSelected(event.target.value);
};

const [selected2, setSelected2] = useState(option[0].value)
const handleChange2 = event => {
    setSelected2(event.target.value);
};
let eurGbpObj = fetch(`https://v6.exchangerate-api.com/v6/d3597431569b9aee1927eca8/pair/EUR/GBP`)
.then((response) => response.json())
// .then((eurGbpObj) => console.log(eurGbpObj.conversion_rate));
let eurGbp = eurGbpObj.value;

// fetch(`https://v6.exchangerate-api.com/v6/d3597431569b9aee1927eca8/pair/EUR/GBP`)
//       .then((response) => response.json())
//       .then((eurGbpObj) => eurGbp = eurGbpObj.conversion_rate);
    //   const eurGbp = eurGbpObj.conversion_rate

      console.log(eurGbpObj)
    return (
        <div className="middle">
            <div className="middle__box">
                <p className="middle__p">Amount</p>
                <div className="middle__row">
                    <div className="middle__currency middle__base">
                        {selected === 'us' ? <img className="middle__flag" src={ UsFlag } alt="US logo" /> : null}
                        {selected === 'gb' ? <img className="middle__flag" src={ GbFlag } alt="GB logo" /> : null}
                        {selected === 'eu' ? <img className="middle__flag" src={ EuFlag } alt="EU logo" /> : null}
                        <select className="middle__select" value={selected} onChange= {handleChange}>
                            <option value={option[0].value}>{option[0].text}</option>
                            <option value={option[1].value}>{option[1].text}</option>
                            <option value={option[2].value}>{option[2].text}</option>
                        </select>
                    </div>
                    <input className="middle__input" />
                </div>
                <div className="middle__middle">
                    <div className="middle__line"></div>
                    <button className="middle__button"></button>
                </div>
                <div className="middle__row">
                    <div className="middle__currency middle__converted">
                        {selected2 === 'us' ? <img className="middle__flag" src={ UsFlag } alt="US logo" /> : null}
                        {selected2 === 'gb' ? <img className="middle__flag" src={ GbFlag } alt="GB logo" /> : null}
                        {selected2 === 'eu' ? <img className="middle__flag" src={ EuFlag } alt="EU logo" /> : null}
                        <select className="middle__select" value={selected2} onChange= {handleChange2}>
                            <option value={option[0].value}>{option[0].text}</option>
                            <option value={option[1].value}>{option[1].text}</option>
                            <option value={option[2].value}>{option[2].text}</option>
                        </select>
                    </div>
                    <input className="middle__input" />
                </div>
            </div>
        </div>
    )
}

export default Middle