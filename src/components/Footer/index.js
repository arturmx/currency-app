import './footer.scss'

const Footer = function({isDark}) {
    return (
        <div className={`footer ${isDark ? 'dark' : ''}`}>
            <h2 className="footer__h2">END</h2>
        </div>
    )
}
export default Footer