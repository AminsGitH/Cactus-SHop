import { useEffect } from "react";
import "./App.css";
import HomeSection from "./components/HomeSection";
import Navbar from "./components/Navbar";
import ScrollReveal from "scrollreveal";

function App() {
  useEffect(() => {
    ScrollReveal().reveal(
      ".home__img, .new__data, .care__img, .contact__content,.footer ",
      {
        origin: "top",
        distance: "80px",
        duration: 2500,
        delay: 300,
      }
    );
    ScrollReveal().reveal(`.home__data, .care__list, .contact__img`, {
      delay: 500,
    });
    ScrollReveal().reveal(`.new__card`, { delay: 500, interval: 100 });
    ScrollReveal().reveal(`.shop__card`, { interval: 100 });
  }, []);
  return (
    <>
      <Navbar />
      <HomeSection />
    </>
  );
}

export default App;
