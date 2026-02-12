import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Skills.css";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    name: "React",
    level: "Expert",
    category: "Frontend",
    icon: "⚛",
    angle: -2,
    sleeveColor: "#e8dcc8",
    labelColor: "#d4842a",
  },
  {
    name: "JavaScript",
    level: "Expert",
    category: "Frontend",
    icon: "✦",
    angle: 3,
    sleeveColor: "#f0e6d0",
    labelColor: "#e8a84c",
  },
  {
    name: "TypeScript",
    level: "Advanced",
    category: "Frontend",
    icon: "◆",
    angle: -1,
    sleeveColor: "#ddd8c8",
    labelColor: "#6b8fa3",
  },
  {
    name: "Node.js",
    level: "Advanced",
    category: "Backend",
    icon: "▲",
    angle: 2,
    sleeveColor: "#e4dec8",
    labelColor: "#7a9a6d",
  },
  {
    name: "CSS / SASS",
    level: "Expert",
    category: "Frontend",
    icon: "✿",
    angle: -3,
    sleeveColor: "#f2e8d6",
    labelColor: "#c47a5a",
  },
  {
    name: "Figma",
    level: "Advanced",
    category: "Design",
    icon: "◎",
    angle: 1,
    sleeveColor: "#e6ddd0",
    labelColor: "#a86cb8",
  },
  {
    name: "GSAP",
    level: "Advanced",
    category: "Frontend",
    icon: "↻",
    angle: -2,
    sleeveColor: "#dde0c8",
    labelColor: "#88b04b",
  },
  {
    name: "Python",
    level: "Intermediate",
    category: "Backend",
    icon: "⬡",
    angle: 3,
    sleeveColor: "#e8e0d0",
    labelColor: "#4a7fb5",
  },
  {
    name: "Git",
    level: "Expert",
    category: "Backend",
    icon: "⎇",
    angle: -1,
    sleeveColor: "#e4d8c8",
    labelColor: "#d45a3a",
  },
];

const badges = [
  { text: "✦ TOP CHARTS", angle: 15, top: "10%", right: "5%" },
  { text: "VINYL ONLY", angle: -10, bottom: "15%", left: "3%" },
  { text: "HANDPICKED", angle: 8, top: "45%", right: "2%" },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [nowPlaying, setNowPlaying] = useState({
    name: "Browse the collection",
    category: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered crate-dig entrance
      gsap.from(".skills__vinyl", {
        y: 80,
        opacity: 0,
        rotation: (i) => (i % 2 === 0 ? -8 : 8),
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills__grid",
          start: "top 85%",
        },
      });

      // Now Playing bar slide in
      gsap.from(".skills__now-playing", {
        x: -60,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills__now-playing",
          start: "top 90%",
        },
      });

      // Category tabs
      gsap.from(".skills__cat-tab", {
        y: 15,
        opacity: 0,
        stagger: 0.06,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".skills__categories",
          start: "top 90%",
        },
      });

      // Crate label
      gsap.from(".skills__crate-label", {
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
        scrollTrigger: {
          trigger: ".skills__crate-label",
          start: "top 95%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleHover = (skill) => {
    setNowPlaying({ name: skill.name, category: skill.category });
  };

  const handleHoverEnd = () => {
    setNowPlaying({ name: "Browse the collection", category: "" });
  };

  return (
    <section id="skills" className="skills section-padding" ref={sectionRef}>
      <div className="container">
        <div className="skills__header">
          <span className="skills__label">— Expertise</span>
          <h2 className="skills__title">Skills &amp; Tools</h2>
        </div>

        {/* Now Playing bar */}
        <div className="skills__now-playing">
          <div className="skills__np-indicator" />
          <span className="skills__np-label">Now Playing</span>
          <div className="skills__np-divider" />
          <span className="skills__np-track">{nowPlaying.name}</span>
          {nowPlaying.category && (
            <span className="skills__np-category">{nowPlaying.category}</span>
          )}
        </div>

        {/* Category tabs */}
        <div className="skills__categories">
          {["All", "Frontend", "Backend", "Design"].map((cat, i) => (
            <button
              key={cat}
              className="skills__cat-tab"
              style={{
                "--tab-rotate": `${(i % 2 === 0 ? -1 : 1) * (i + 1)}deg`,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vinyl grid */}
        <div className="skills__grid">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skills__vinyl"
              style={{ "--rotate": `${skill.angle}deg` }}
              onHoverStart={() => handleHover(skill)}
              onHoverEnd={handleHoverEnd}
              whileTap={{ scale: 0.97 }}
            >
              <div className="skills__vinyl-flipper">
                {/* Front — Sleeve */}
                <div
                  className="skills__sleeve"
                  style={{ "--sleeve-color": skill.sleeveColor }}
                >
                  <div className="skills__sleeve-content">
                    <div className="skills__sleeve-top">
                      <span className="skills__sleeve-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="skills__sleeve-icon">{skill.icon}</span>
                    </div>

                    <div className="skills__sleeve-body">
                      <h3 className="skills__sleeve-name">{skill.name}</h3>
                      <span className="skills__sleeve-level">
                        {skill.level}
                      </span>
                    </div>

                    <div className="skills__sleeve-bottom">
                      <span className="skills__sleeve-cat">
                        {skill.category}
                      </span>
                      <span className="skills__sleeve-year">2024</span>
                    </div>
                  </div>
                  <div className="skills__sleeve-border" />
                  <div className="skills__sleeve-wear" />
                </div>

                {/* Back — Vinyl disc */}
                <div className="skills__disc">
                  <div
                    className="skills__disc-inner"
                    style={{ "--disc-label": skill.labelColor }}
                  >
                    <div className="skills__disc-label">
                      <div>
                        <span className="skills__disc-name">{skill.name}</span>
                        <span className="skills__disc-level">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Crate label */}
        <div className="skills__crate-label">
          <div className="skills__crate-line" />
          <span>09 Records • Curated Collection</span>
          <div className="skills__crate-line" />
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
