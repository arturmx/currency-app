import './header.scss';

const Header = function({ x, y }) {

    return (
        <div className="header">
            <h1 className="header__h1">hello, {x + y}</h1>
        </div>
    )
}

export default Header
