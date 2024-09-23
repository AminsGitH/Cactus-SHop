const Footer = () => {

  return (
    <>
      <footer className="footer">
        <div className="footer__container container grid">
          <div>
            <a href="#" className="footer__logo">
              <i className="ri-cactus-line"></i> Cactus
            </a>
            <p className="footer__description">
              Choose the Best <br /> plants for your home.
            </p>
          </div>

          <div className="footer__content grid">
            <div>
              <h3 className="footer__title">COMPANY</h3>
              <ul className="footer__links">
                <li>
                  <a href="#" className="footer__link">
                    About us
                  </a>
                </li>

                <li>
                  <a href="" className="footer__link">
                    Products
                  </a>
                </li>

                <li>
                  <a href="" className="footer__link">
                    Features
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">INFORMATION</h3>
              <ul className="footer__links">
                <li>
                  <a href="#" className="footer__link">
                    Blog & News
                  </a>
                </li>

                <li>
                  <a href="#" className="footer__link">
                    Contact Us
                  </a>
                </li>

                <li>
                  <a href="#" className="footer__link">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">SOCIAL MEDIA</h3>

              <div className="footer__social">
                <a href="#" target="_blank" className="footer__social-link">
                  <i className="ri-facebook-circle-line"></i>
                </a>
                <a href="#" target="_blank" className="footer__social-link">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="#" target="_blank" className="footer__social-link">
                  <i className="ri-twitter-x-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <span className="footer__copy">
          &#169; All Rights Reserved By Company Name.
        </span>
      </footer>

    
    </>
  );
};

export default Footer;
