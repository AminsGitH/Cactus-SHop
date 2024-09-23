const Shop = () => {
  return (
    <section className="shop section" id="shop">
      <h2 className="section__title">THE BEST PLANTS</h2>

      <div className="shop__container container grid">
        <article className="shop__card">
          <img src="/src/assets/Cactus-imgs/7.png" alt=""  className="shop__img"/>
          <h3 className="shop__title">
            Gymnocalycium <br /> Cactus
          </h3>
          <span className="shop__price">$15</span>
          <button className="shop__button">
            <i className="ri-shopping-bag-line"></i>
          </button>
        </article>

        <article className="shop__card">
          <img src="/src/assets/Cactus-imgs/8.png" alt=""  className="shop__img"/>
          <h3 className="shop__title">
            Echeveria <br /> Succulent
          </h3>
          <span className="shop__price">$10</span>
          <button className="shop__button">
            <i className="ri-shopping-bag-line"></i>
          </button>
        </article>

        <article className="shop__card">
          <img src="/src/assets/Cactus-imgs/shop-cactus-5.png" alt=""  className="shop__img"/>
          <h3 className="shop__title">
            Ferocactus <br /> Cactus
          </h3>
          <span className="shop__price">$15</span>
          <button className="shop__button">
            <i className="ri-shopping-bag-line"></i>
          </button>
        </article>

        <article className="shop__card">
          <img src="/src/assets/Cactus-imgs/2.png" alt=""  className="shop__img"/>
          <h3 className="shop__title">
            Key Lime Pie <br /> Succulent
          </h3>
          <span className="shop__price">$10</span>
          <button className="shop__button">
            <i className="ri-shopping-bag-line"></i>
          </button>
        </article>

        <article className="shop__card">
          <img src="/src/assets/Cactus-imgs/3.png" alt=""  className="shop__img"/>
          <h3 className="shop__title">Melocactus <br/> Cactus</h3>
          <span className="shop__price">$15</span>
          <button className="shop__button">
            <i className="ri-shopping-bag-line"></i>
          </button>
        </article>
      </div>
    </section>
  );
};

export default Shop;
