import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__left">
          <span className="footer__logo">
            WB<span className="footer__dot">.</span>
          </span>
          <p className="footer__tagline">Crafting with analog soul.</p>
        </div>

        <div className="footer__center">
          <div className="footer__links">
            <a href="#home" className="footer__link">
              Home
            </a>
            <span className="footer__sep">✦</span>
            <a href="#about" className="footer__link">
              About
            </a>
            <span className="footer__sep">✦</span>
            <a href="#work" className="footer__link">
              Work
            </a>
            <span className="footer__sep">✦</span>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </div>
        </div>

        <div className="footer__right">
          <p className="footer__copy">© {year} WB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
