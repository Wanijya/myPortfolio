import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about__paper", {
        y: 60,
        opacity: 0,
        rotation: -2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about__paper",
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".about__stamp", {
        scale: 0,
        opacity: 0,
        rotation: 20,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".about__paper",
          start: "top 60%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about section-padding" ref={sectionRef}>
      <div className="container">
        <div className="about__header">
          <span className="about__label">— About Me</span>
          <h2 className="about__title">The Story</h2>
        </div>

        <div className="about__paper">
          <div className="about__paper-inner">
            <div className="about__tape about__tape--left" />
            <div className="about__tape about__tape--right" />

            <p className="about__text">
              I am a software developer and also a designer. Currently I work
              professionally while continuing to explore creativity through
              design. I enjoy building digital experiences that combine
              functionality with visual storytelling.
            </p>

            <p className="about__text about__text--secondary">
              Every pixel has a purpose. Every line of code tells a story. I
              believe in crafting work that feels alive — where the analog
              warmth of vintage aesthetics meets the precision of modern
              technology.
            </p>

            <div className="about__meta">
              <div className="about__meta-item">
                <span className="about__meta-num">2+</span>
                <span className="about__meta-label">Years Experience</span>
              </div>
              <div className="about__meta-item">
                <span className="about__meta-num">10+</span>
                <span className="about__meta-label">Projects Done</span>
              </div>
              <div className="about__meta-item">
                <span className="about__meta-num">5+</span>
                <span className="about__meta-label">Happy Clients</span>
              </div>
            </div>
          </div>

          {/* Decorative stamps */}
          <div className="about__stamp about__stamp--1">✦ AUTHENTIC</div>
          <div className="about__stamp about__stamp--2">HANDMADE</div>
        </div>
      </div>
    </section>
  );
}
