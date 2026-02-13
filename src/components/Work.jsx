import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/projects";
import "./Work.css";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      // Animate header
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".work__header",
          start: "top 85%",
        },
      });
      headerTl
        .from(".work__label", { x: -30, opacity: 0, duration: 0.5 })
        .from(
          ".work__title",
          { y: 50, opacity: 0, duration: 0.7, ease: "power3.out" },
          "-=0.2",
        )
        .from(
          ".work__header-line",
          { scaleX: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3",
        );

      // Counter badge animation
      gsap.from(".work__counter", {
        scale: 0,
        rotation: -20,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".work__header",
          start: "top 75%",
        },
      });

      // ── Desktop: stacked pinning — each card pins and gets covered by the next ──
      mm.add("(min-width: 769px)", () => {
        cardsRef.current.forEach((card, i) => {
          if (!card) return;

          // Each LATER card gets a HIGHER z-index so it stacks ON TOP
          gsap.set(card, { zIndex: i + 1 });

          // Pin every card at the same spot (top ~12%)
          // All cards pin in the same position; later cards scroll up and cover earlier ones
          ScrollTrigger.create({
            trigger: card,
            start: "top 12%",
            endTrigger: ".work__cards",
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            id: `card-pin-${i}`,
          });

          // Entrance animation: card slides up from below into its pinned position
          gsap.from(card, {
            y: 120,
            opacity: 0,
            scale: 0.95,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 100%",
              end: "top 25%",
              scrub: 1,
            },
          });

          // Parallax on the big number
          gsap.to(card.querySelector(".work__card-num"), {
            y: -30,
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 2,
            },
          });
        });
      });

      // ── Mobile: simple reveal, no pinning ──
      mm.add("(max-width: 768px)", () => {
        cardsRef.current.forEach((card) => {
          if (!card) return;
          gsap.from(card, {
            y: 80,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
          });
        });
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <section id="work" className="work" ref={sectionRef}>
      <div className="container section-padding">
        <div className="work__header">
          <div className="work__header-top">
            <div>
              <span className="work__label">— Selected Work</span>
              <h2 className="work__title">Projects</h2>
            </div>
            <div className="work__counter">
              <span className="work__counter-num">0{projects.length}</span>
              <span className="work__counter-text">Works</span>
            </div>
          </div>
          <div className="work__header-line" />
        </div>
      </div>

      <div className="work__cards">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="work__card"
            ref={(el) => (cardsRef.current[i] = el)}
            style={{ "--card-accent": project.color }}
          >
            <div className="work__card-inner">
              {/* ── Left: Content ── */}
              <div className="work__card-content">
                <div className="work__card-top">
                  <span className="work__card-num">0{project.id}</span>
                  <div className="work__card-meta">
                    <span className="work__card-year">{project.year}</span>
                    <span className="work__card-role">{project.role}</span>
                  </div>
                </div>

                <div className="work__card-body">
                  <span className="work__card-cat">{project.category}</span>
                  <h3 className="work__card-title">{project.title}</h3>
                  <p className="work__card-desc">{project.description}</p>
                </div>

                <div className="work__card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="work__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="work__card-bottom">
                  <motion.button
                    className="retro-btn work__card-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View Project →
                  </motion.button>
                  <div className="work__card-line" />
                </div>
              </div>

              {/* ── Right: Visual preview ── */}
              <div className="work__card-visual">
                <div className="work__card-preview">
                  <div
                    className="work__card-preview-inner"
                    style={{ background: project.color }}
                  >
                    <span className="work__card-preview-label">
                      {project.category.split(" / ")[0]}
                    </span>
                    <span className="work__card-preview-num">
                      0{project.id}
                    </span>
                  </div>
                  {/* Dashed border frame */}
                  <div className="work__card-preview-frame" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom flourish */}
      <div className="work__bottom-flourish">
        <span className="work__flourish-star">✦</span>
        <div className="work__flourish-line" />
        <span className="work__flourish-text">End of Selection</span>
        <div className="work__flourish-line" />
        <span className="work__flourish-star">✦</span>
      </div>
    </section>
  );
};

export default Work;
