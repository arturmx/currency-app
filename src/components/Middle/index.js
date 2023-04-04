import './middle.scss';
import UsFlag from './img/US.png';
import GbFlag from './img/GB.png';
import EuFlag from './img/EU.png';
import Selection from '../Selection'
import { useState } from 'react';

const Middle = function() {

// dollar to pound:

let [usdGbp, setUsdGbp] = useState();
let usdGbpObj = fetch (`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/gbp.json`)
.then((response) => response.json())
.then((usdGbpObj) => setUsdGbp(usdGbpObj.gbp));

// dollar to euro:

let [usdEur, setUsdEur] = useState();
let usdEurObj = fetch (`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/eur.json`)
.then((response) => response.json())
.then((usdEurObj) => setUsdEur(usdEurObj.eur));

// pound to dollar:

let [gbpUsd, setGbpUsd] = useState();
let gbpUsdObj = fetch (`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/gbp/usd.json`)
.then((response) => response.json())
.then((gbpUsdObj) => setGbpUsd(gbpUsdObj.usd));

// pound to euro:

let [gbpEur, setGbpEur] = useState();
let gbpEurObj = fetch (`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/gbp/eur.json`)
.then((response) => response.json())
.then((gbpEurObj) => setGbpEur(gbpEurObj.eur));

// euro to pound:

let [eurGbp, setEurGbp] = useState();
let eurGbpObj = fetch (`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/gbp.json`)
.then((response) => response.json())
.then((eurGbpObj) => setEurGbp(eurGbpObj.gbp));

// euro to dollar:

let [eurUsd, setEurUsd] = useState();
let eurUsdObj = fetch (`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/usd.json`)
.then((response) => response.json())
.then((eurUsdObj) => setEurUsd(eurUsdObj.usd));


const option = [
    {value: 'USD'},
    {value: 'GBP'},
    {value: 'EUR'},
  ];

let [selected, setSelected] = useState(option[0].value)
const handleChange = (event) => {
    setSelected(event.target.value);
    input1.value = 0;
    input2.value = 0;
};

let [selected2, setSelected2] = useState(option[0].value)
const handleChange2 = event => {
    setSelected2(event.target.value);
    input1.value = 0;
    input2.value = 0;
};


let rate = function() {
    if (selected === selected2) {
        return 1
    }
    else if (selected === 'USD' && selected2 === 'GBP') {
        return usdGbp
    }
    else if (selected === 'USD' && selected2 === 'EUR') {
        return usdEur
    }
    else if (selected === 'GBP' && selected2 === 'USD') {
        return gbpUsd
    }
    else if (selected === 'GBP' && selected2 === 'EUR') {
        return gbpEur
    }
    else if (selected === 'EUR' && selected2 === 'USD') {
        return eurUsd
    }
    else if (selected === 'EUR' && selected2 === 'GBP') {
        return eurGbp
    }
}

const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');

// buggy!!!!!  math round na wyniku!!!!!!

const inputChange = function() {
    return input2.value = input1.value * rate();
}
const button = document.querySelector('.middle__button')
const buttonClick = function() {
    button.classList.toggle('active');
    let buffer1;
    let buffer2;
    let buffer3;
    let buffer4;
    buffer1 = input1.value;
    buffer2 = input2.value;
    input2.value = buffer1;
    input1.value = buffer2;
    buffer3 = selected;
    buffer4 = selected2;
    selected = buffer4;
    selected2 = buffer3;
}

    return (
        <div className="middle">
            <div className="middle__box">
                <p className="middle__p">Amount</p>
                <div className="middle__row">
                    <div className="middle__currency middle__base">
                        {selected === 'USD' ? <img className="middle__flag" src={ UsFlag } alt="US logo" /> : null}
                        {selected === 'GBP' ? <img className="middle__flag" src={ GbFlag } alt="GB logo" /> : null}
                        {selected === 'EUR' ? <img className="middle__flag" src={ EuFlag } alt="EU logo" /> : null}
                        <select className="middle__select" value={selected} onChange= {handleChange} >
                            <option value={option[0].value}>{option[0].value}</option>
                            <option value={option[1].value}>{option[1].value}</option>
                            <option value={option[2].value}>{option[2].value}</option>
                        </select>
                    </div>
                    <input id="input1" className="middle__input" onChange= {inputChange} />
                </div>
                <div className="middle__middle">
                    <div className="middle__line"></div>
                    <button className="middle__button" onClick={buttonClick}></button>
                </div>
                <div className="middle__row">
                    <div className="middle__currency middle__converted">
                        {selected2 === 'USD' ? <img className="middle__flag" src={ UsFlag } alt="US logo" /> : null}
                        {selected2 === 'GBP' ? <img className="middle__flag" src={ GbFlag } alt="GB logo" /> : null}
                        {selected2 === 'EUR' ? <img className="middle__flag" src={ EuFlag } alt="EU logo" /> : null}
                        <select className="middle__select" value={selected2} onChange= {handleChange2}>
                            <option value={option[0].value}>{option[0].value}</option>
                            <option value={option[1].value}>{option[1].value}</option>
                            <option value={option[2].value}>{option[2].value}</option>
                        </select>
                    </div>
                    <input id="input2" className="middle__input" />
                </div>
            </div>

{/* !!!!!!!!!!! to powinno być w componencie footer */}
            <div className="footer">
                <p className="footer__p">Indicative Exchange Rate</p>
                <p className="footer__rate">1 {selected} = {rate()} {selected2}</p>
            </div>
        </div>
    )
}

export default Middle;