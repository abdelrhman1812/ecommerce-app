import "../../../assets/styles/header.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="overlay"></div>
      <div className="container-xl">
        <div className="data">
          <span className="display-4 ">Great Design Collection</span>
          <h1 className="lead">
            Explore the latest fashion trends and cutting-edge electronics.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiuiana smod tempor ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
          <button className="btn">Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
