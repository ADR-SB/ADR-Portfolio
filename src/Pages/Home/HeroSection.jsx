export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Adarsh S</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">An Aspiring</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Passionate and driven aspiring developer with a keen eye for detail and a love for problem-solving. 
          <br />Constantly seeking to expand my knowledge and skills in various programming languages and technologies.
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
