import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <div className="about-avatar-container">
          <img src={`${import.meta.env.BASE_URL}images/profile.jpg`} alt="Piyush Tripathi" className="about-avatar-img" />
        </div>
        <h3 className="title">About Me</h3>
        <p className="para">
          My name is Piyush Tripathi and I am 18 years old, centered on AI/ML and computer science fundamentals. Thank you for visiting my website.
        </p>
      </div>
    </div>
  );
};

export default About;
