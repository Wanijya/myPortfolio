import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "../data/skills";
import "./Skills.css";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section entrance
      gsap.from(".skills__header", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills",
          start: "top 80%",
        },
      });

      // Scene reveal
      gsap.from(".skills__scene", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills__scene",
          start: "top 85%",
        },
      });

      // Hub
      gsap.from(".skills__hub", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".skills__scene",
          start: "top 70%",
        },
      });

      // Strip & hint
      gsap.from(".skills__strip, .skills__hint", {
        opacity: 0,
        y: 10,
        duration: 0.5,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".skills__strip",
          start: "top 95%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="skills section-padding" ref={sectionRef}>
      {/* Corner marks */}
      <span className="skills__corner skills__corner--tl">┌</span>
      <span className="skills__corner skills__corner--tr">┐</span>
      <span className="skills__corner skills__corner--bl">└</span>
      <span className="skills__corner skills__corner--br">┘</span>

      <div className="container">
        <div className="skills__header">
          <span className="skills__label">— Expertise</span>
          <h2 className="skills__title">Skills &amp; Tools</h2>
        </div>

        {/* 3D Scene */}
        <div className="skills__scene">
          {/* Rotating Ring */}
          <div className="skills__ring">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className="skills__card"
                style={{ "--i": i, "--card-accent": skill.accent }}
              >
                <div className="skills__card-inner">
                  <div className="skills__card-top">
                    <span className="skills__card-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="skills__card-icon">
                      <skill.icon />
                    </span>
                  </div>

                  <div className="skills__card-body">
                    <h3 className="skills__card-name">{skill.name}</h3>
                    <span className="skills__card-level">{skill.level}</span>
                  </div>

                  <div className="skills__card-bottom">
                    <span className="skills__card-cat">{skill.category}</span>
                    <span className="skills__card-stamp">2024</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center hub */}
          <div className="skills__hub">
            <div className="skills__hub-ring">
              <div className="skills__hub-dot" />
            </div>
            <span className="skills__hub-label">Orbit</span>
          </div>
        </div>
        
        <p className="skills__hint">Hover to pause • Explore the ring</p>
      </div>
    </section>
  );
};

export default Skills;
