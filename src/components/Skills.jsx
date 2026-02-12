import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Skills.css";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "React", level: "Expert", angle: -3, x: 0, y: 0 },
  { name: "JavaScript", level: "Expert", angle: 2, x: 1, y: 0 },
  { name: "TypeScript", level: "Advanced", angle: -1, x: 2, y: 0 },
  { name: "Node.js", level: "Advanced", angle: 4, x: 0, y: 1 },
  { name: "CSS / SASS", level: "Expert", angle: -2, x: 1, y: 1 },
  { name: "Figma", level: "Advanced", angle: 3, x: 2, y: 1 },
  { name: "GSAP", level: "Advanced", angle: -4, x: 0, y: 2 },
  { name: "Python", level: "Intermediate", angle: 1, x: 1, y: 2 },
  { name: "Git", level: "Expert", angle: -2, x: 2, y: 2 },
];

const badges = [
  { text: "✦ CREATIVE", angle: 15, top: "10%", right: "5%" },
  { text: "PIXEL PERFECT", angle: -10, bottom: "15%", left: "3%" },
  { text: "HANDCRAFTED", angle: 8, top: "45%", right: "2%" },
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills__poster", {
        y: 50,
        opacity: 0,
        rotation: (i) => (i % 2 === 0 ? -5 : 5),
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills__grid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="skills section-padding" ref={sectionRef}>
      <div className="container">
        <div className="skills__header">
          <span className="skills__label">— Expertise</span>
          <h2 className="skills__title">Skills &amp; Tools</h2>
        </div>

        <div className="skills__grid">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="skills__poster"
              style={{ "--rotate": `${skill.angle}deg` }}
              whileHover={{
                scale: 1.08,
                rotate: 0,
                zIndex: 10,
                boxShadow: "8px 8px 0px rgba(26,26,26,0.3)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="skills__poster-inner">
                <span className="skills__poster-icon">◆</span>
                <h3 className="skills__poster-name">{skill.name}</h3>
                <span className="skills__poster-level">{skill.level}</span>
              </div>
              <div className="skills__poster-border" />
            </motion.div>
          ))}
        </div>

        {/* Floating badges */}
        {badges.map((badge) => (
          <div
            key={badge.text}
            className="skills__badge"
            style={{
              transform: `rotate(${badge.angle}deg)`,
              top: badge.top,
              bottom: badge.bottom,
              left: badge.left,
              right: badge.right,
            }}
          >
            {badge.text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
