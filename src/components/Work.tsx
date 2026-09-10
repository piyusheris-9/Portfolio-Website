import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const baseUrl = import.meta.env.BASE_URL;
const projects = [
  {
    title: "Personal Portfolio",
    category: "3D Interactive Web App",
    tools: "React, TypeScript, GSAP, Three.js, WebGL",
    description:
      "Designed and built this interactive 3D portfolio website featuring custom GSAP animations, 3D character model, dynamic smooth scrolling, and responsive layouts.",
    image: `${baseUrl}images/portfolio-preview.png`,
  },
  {
    title: "Snap-Link",
    category: "Media Sharing Platform",
    tools: "MongoDB, Express.js, React, Node.js (MERN)",
    description:
      "Developed a responsive web platform enabling users to upload, manage, and share multimedia content. Implemented secure RESTful APIs, user authentication, and persistent cloud storage.",
    image: `${baseUrl}images/placeholder.webp`,
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box || box.length === 0) return 0;
      const container = document.querySelector(".work-container");
      if (!container) return 0;
      const rectLeft = container.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement
        ? box[0].parentElement.getBoundingClientRect().width
        : window.innerWidth;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2 || 0;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
      return translateX;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${setTranslateX()}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -translateX,
      ease: "none",
    });

    const handleResize = () => {
      setTranslateX();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <p style={{ marginTop: "10px", fontSize: "14px", lineHeight: "1.4" }}>
                  {project.description}
                </p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
