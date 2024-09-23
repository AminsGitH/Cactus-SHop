const News = () => {
  return (
    <section className="new section" id="new">
      <div className="new__container container grid">
        <div className="new__data">
          <h2 className="section__title">
            NEW PLANTS FOR <br /> YOUR HOME
          </h2>
          <p className="new__description">
            Select new ornamental plants for home decoration and obtain an
            atmosphere of harmony and freshness.
          </p>
        </div>
        <div className="new__content grid">
          <article className="new__card">
            <img
              src="/src/assets/Cactus-imgs/2.png"
              alt=""
              className="new__img"
            />
            <h2 className="new__title">Gymnocalycium Cactus</h2>
          </article>

          <article className="new__card">
            <img
              src="/src/assets/Cactus-imgs/3.png"
              alt=""
              className="new__img"
            />
            <h2 className="new__title">Lily Pad Succulent</h2>
          </article>

          <article className="new__card">
            <img
              src="/src/assets/Cactus-imgs/4.png"
              alt=""
              className="new__img"
            />
            <h2 className="new__title">Rebutia Cactus</h2>
          </article>
        </div>
      </div>
    </section>
  );
};

export default News;
