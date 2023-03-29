import './middle.scss';
import UsFlag from './img/US.png';
import GbFlag from './img/GB.png';
import EuFlag from './img/EU.png';
const Middle = function() {
    
    return (
        <div className="middle">
            <div className="middle__box">
                <p className="middle__p">Amount</p>
                <div className="middle__row">
                    <div className="middle__currency">
                        <img className="middle__flag" src={ UsFlag } alt="US logo" />
                        {/* <img className="middle__flag" src={ GbFlag } alt="EU logo" />
                        <img className="middle__flag" src={ EuFlag } alt="GB logo" /> */}
                        <select className="middle__select">
                            <option value="1">USD</option>
                            <option value="2">GBP</option>
                            <option value="3">EUR</option>
                        </select>
                    </div>
                    <input className="middle__input" />
                </div>
                <div className="middle__middle">
                    <div className="middle__line"></div>
                    <button className="middle__button"></button>
                </div>
                <div className="middle__row">
                    <div className="middle__currency">
                        <img className="middle__flag" src={ UsFlag } alt="US logo" />
                        {/* <img className="middle__flag" src={ GbFlag } alt="EU logo" />
                        <img className="middle__flag" src={ EuFlag } alt="GB logo" /> */}
                        <select className="middle__select">
                            <option value="1">USD</option>
                            <option value="2">GBP</option>
                            <option value="3">EUR</option>
                        </select>
                    </div>
                    <input className="middle__input" />
                </div>
            </div>
        </div>
    )
}

export default Middle