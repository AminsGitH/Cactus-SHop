const Care = () => {
  return (
    <section className="care section" id="care">
      <h2 className="section__title">
        CARE AND HEALTH FOR <br /> YOUR CACTUS
      </h2>
      <div className="care__contianer container grid">
        <img src="/src/assets/Cactus-imgs/9.png" alt="" className="care__img" />
        <ul className="care__list">
          <li className="care__item">
            <i className="ri-checkbox-fill"></i>
            <p>
              In cold times, add water once a month and during the summer do it
              when the soil is very dry.
            </p>
          </li>

          <li className="care__item">
            <i className="ri-checkbox-fill"></i>
            <p>
              Have good drainage so that the cactus does not accumulate water.
            </p>
          </li>

          <li className="care__item">
            <i className="ri-checkbox-fill"></i>
            <p>
              Place your cactus or succulent in a location with indirect light.
            </p>
          </li>

          <li className="care__item">
            <i className="ri-checkbox-fill"></i>
            <p>
              Do not water more than necessary, as it can accumulate too much
              water and the plant will rot.
            </p>
          </li>

          <li className="care__item">
            <i className="ri-checkbox-fill"></i>
            <p>
              Do not expose to high temperatures, as succulent plants are not
              fans of extremes.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Care;
