import './footer.scss'
// import '../../scss/global.scss'

const Footer = function({isDark}) {
    return (
        // <div className={`footer ${isDark ? 'dark' : ''}`}>
        //     <h2 className="footer__h2">END</h2>
        // </div>

        <div className="footer">
            <p className="footer__p">Indicative Exchange Rate</p>
            <p className="footer__rate">1 SGD = 0.7367 USD</p>
        </div>
    )
}
export default Footer