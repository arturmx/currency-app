import './middle.scss';
import UsFlag from './img/US.png';
import GbFlag from './img/GB.png';
import EuFlag from './img/EU.png';
import { useState } from 'react';

const options = [
    {value: 'usd'},
    {value: 'gbp'},
    {value: 'eur'},
];


const Middle = function() {
    // dollar to pound:
    let [rate, setRate] = useState();
    let [selected1, setSelected1] = useState(options[0].value);
    let [selected2, setSelected2] = useState(options[1].value);
    let [input1, setInput1] = useState(0);
    let [input2, setInput2] = useState(0);


    let fechRatio = function() {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${selected1}/${selected2}.json`)
        .then((response) => response.json())
        .then((data) => setRate(data[selected2]));
    }

    const handleChange1 = (event) => {
        setSelected1(event.target.value);
    };

    const handleChange2 = (event) => {
        setSelected2(event.target.value);
    };

    const inputChange1 = async function(event) {
        const val = event.target.value;

        if (val < 0) {
            setInput1(0);
        } else {
            setInput1(val);
        }

        await fechRatio();

        setInput2((val * rate).toFixed(2))
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
        buffer3 = selected1;
        buffer4 = selected2;
        selected1 = buffer4;
        selected2 = buffer3;
    }

    return (
        <div className="middle">
            <div className="middle__box">
                <p className="middle__p">Amount</p>
                <div className="middle__row">
                    <div className="middle__currency middle__base">
                        {selected1 === 'usd' ? <img className="middle__flag" src={ UsFlag } alt="US logo" /> : null}
                        {selected1 === 'gbp' ? <img className="middle__flag" src={ GbFlag } alt="GB logo" /> : null}
                        {selected1 === 'eur' ? <img className="middle__flag" src={ EuFlag } alt="EU logo" /> : null}
                        <select className="middle__select" value={selected1} onChange={handleChange1} >
                            { options.map(function(el, i) {
                                return <option key={i} value={el.value}>{el.value.toUpperCase()}</option>
                            })}
                        </select>
                    </div>
                    <input id="input1" className="middle__input" onChange={inputChange1} value={input1} type="number" />
                </div>
                <div className="middle__middle">
                    <div className="middle__line"></div>
                    <button className="middle__button" onClick={buttonClick}></button>
                </div>
                <div className="middle__row">
                    <div className="middle__currency middle__converted">
                        {selected2 === 'usd' ? <img className="middle__flag" src={ UsFlag } alt="US logo" /> : null}
                        {selected2 === 'gbp' ? <img className="middle__flag" src={ GbFlag } alt="GB logo" /> : null}
                        {selected2 === 'eur' ? <img className="middle__flag" src={ EuFlag } alt="EU logo" /> : null}
                        <select className="middle__select" value={selected2} onChange={handleChange2}>
                            { options.map(function(el, i) {
                                return <option key={i} value={el.value}>{el.value.toUpperCase()}</option>
                            })}
                        </select>
                    </div>
                    <input id="input2" className="middle__input" value={input2} />
                </div>
            </div>
            <div className="footer">
                <p className="footer__p">Indicative Exchange Rate</p>
                <p className="footer__rate">1 {selected1} = {(rate || '?') + selected2}</p>
            </div>
        </div>
    )
}

export default Middle;