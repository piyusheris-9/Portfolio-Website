import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack & AI Development</h4>
                <h5>Projects & Enterprise Simulations</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Hands-on experience developing full-stack applications and AI-driven workflow tools, complemented by virtual simulations in enterprise cybersecurity and operations. Eager to leverage skills in Python, MERN stack, and workflow automation for software engineering and ML roles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Aspiring Software Engineer</h4>
                <h5>SRM Institute of Science and Technology</h5>
              </div>
              <h3>2029</h3>
            </div>
            <p>
              I am an aspiring Software Engineer and AI/ML enthusiast pursuing my B.Tech at SRM Institute of Science and Technology. My focus spans building practical software and automated systems that solve real-world bottlenecks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
