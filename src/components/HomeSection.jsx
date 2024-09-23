import Care from "./Care";
import Contact from "./Contact";
import Footer from "./Footer";
import News from "./News";
import ScrollUpButton from "./ScrollUpButton";
import Shop from "./Shop";

const HomeSection = () => {
 
  // scroll active
  
  return (
    <>
      <main className="main">
        {/* HOME */}
        <section className="home section" id="home">
          <div className="home__container container grid">
            <img
              src="/src/assets/Cactus-imgs/1 3.png"
              alt=""
              className="home__img"
            />

            <div className="home__data">
              <h1 className="home__title">
                ORNAMENTAL <span>PLANTS</span> FOR <br />
                YOUR HOME
              </h1>
              <p className="home__description">
                we design ORNAMENTAL plants for your home in-house for original
                style and quality you wont find anywhere else.
              </p>
              <div className="home__buttons">
                <a href="#shop" className="button">
                  <span>
                    <i className="ri-arrow-right-line"></i>
                  </span>
                  GO TO SHOP
                </a>
                <a href="#" className="button__link">
                  MORE DETAILS
                </a>
              </div>
            </div>
          </div>
        </section>
        <News />
        <Shop />
        <Care />
        <Contact />
      </main>
      <Footer />
      <ScrollUpButton />
    </>
  );
};

export default HomeSection;
