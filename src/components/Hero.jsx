import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h2 className="hero-subtitle">Hello, I'm</h2>
            <h1 className="hero-title">Sagar Jamadar</h1>
            <p className="hero-description">
              Full Stack Developer | Creative Problem Solver | Tech Enthusiast
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="images/hero.png"
              alt="Developer workspace"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
