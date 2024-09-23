import React from "react";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">
        CONTACT US FOR <br /> CACTUS
      </h2>
      <div className="contact__container container grid">
        <img
          src="/src/assets/Cactus-imgs/9.png"
          alt=""
          className="contact__img"
        />
        <div className="contact__content">
          <div>
            <h3 className="contact__title">Our Social Apps</h3>
            <div className="contact__social">
              <a href="#" target="_blank">
                <i className="ri-messenger-fill"></i>
              </a>
              <a href="#" target="_blank">
                <i className="ri-whatsapp-line"></i>
              </a>
              <a href="#" target="_blank">
                <i className="ri-mail-fill"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="contact__title">Call us on this number</h3>
            <address className="contact__info">+20123123123</address>
          </div>

          <div>
            <h3 className="contact__title">Find us here</h3>
                      <address className="contact__info">
                          Lima- Sun City - Peru <br />
                          Av. Moon #4321
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
