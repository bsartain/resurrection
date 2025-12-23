export default function Intro() {
  return (
    <>
      {/* <section id="intro" className="s-intro">
        <div className="s-intro__bg" style={{ backgroundImage: `url("../images/home-hero.jpg")` }}></div>
        <div className="row s-intro__content">
          <div className="column xl-12">
            <div className="s-intro__pretitle">Welcome to</div>
            <h1 className="s-intro__title">Resurection Anglican Church</h1>
            <p className="s-intro__desc lead">
              Where ancient liturgy meets modern hearts in Rock Hill, SC. Join us in worship that honors tradition while embracing today's spirit.
            </p>
          </div>
        </div>
        <div className="s-intro__scroll-down">
          <a href="#about" className="smoothscroll">
            <span className="scroll-text u-screen-reader-text">Scroll Down</span>
            <div className="scroll-icon">Your scroll arrow SVG</div>
          </a>
        </div>
      </section> */}
      <section id="intro" className="s-intro">
        {/* Background Video */}
        <video className="s-intro__bg" autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }}>
          <source src="/videos/pray.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="row s-intro__content">
          <div className="column xl-12">
            <div className="s-intro__pretitle">Welcome to</div>
            <h1 className="s-intro__title">Resurrection Anglican Church</h1>
            <p className="s-intro__desc lead">Ancient liturgy, modern hearts.</p>
          </div>
        </div>

        <div className="s-intro__scroll-down">
          <a href="#about" className="smoothscroll">
            <span className="scroll-text u-screen-reader-text">Scroll Down</span>
            <div className="scroll-icon">{/* Your scroll arrow SVG */}</div>
          </a>
        </div>
      </section>
    </>
  );
}
