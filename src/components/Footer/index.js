import './footer.scss'

const Footer = function({isDark}) {
    return (
        // <div className={`footer ${isDark ? 'dark' : ''}`}>
        //     <h2 className="footer__h2">END</h2>
        // </div>

        <div className="footer">
            <div className="container">
                <p className="footer__p">Indicative Exchange Rate</p>
                <p className="footer__rate"></p>
            </div>
        </div>
    )
}
export default Footer