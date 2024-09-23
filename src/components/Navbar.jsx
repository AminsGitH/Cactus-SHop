import { useState } from "react";

const Navbar = () => {
  // menu hidden
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleClick = () => {
    setToggleMenu((prev) => !prev);
  };
  // hide menu on mobile
  const navLink = document.querySelectorAll(".nav__link");
  const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
  };
  navLink.forEach((n) => n.addEventListener("click", linkAction));

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <i className="ri-cactus-line"></i>
          Cactus
        </a>

        <div
          className={`nav__menu ${toggleMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#news" className="nav__link">
                News
              </a>
            </li>

            <li className="nav__item">
              <a href="#shop" className="nav__link">
                Shop
              </a>
            </li>

            <li className="nav__item">
              <a href="#care" className="nav__link">
                Care
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
          {/* close button */}
        </div>

        <div className="nav__actions">
          <i className="ri-user-line"></i>
          <i className="ri-shopping-cart-line"></i>

          {toggleMenu ? (
            <div className="nav__close" id="nav-close">
              <i className="ri-close-line" onClick={handleToggleClick}></i>
            </div>
          ) : (
            <div className="nav__toggle" id="nav-toggle">
              <i className="ri-menu-line" onClick={handleToggleClick}></i>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
