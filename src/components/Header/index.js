import './header.scss';

const Header = function({ x, y }) {

    return (
        <div className="header">
            <h1 className="header__h1">Currency Converter</h1>
            <p className="header__p">Check live rates, set rate alerts, receive notifications and more.</p>
        </div>
    )
}

export default Header
