import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";

export default function Hero() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(subRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          headlineRef.current.children,
          {
            y: 80,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
          },
          "-=0.3",
        )
        .from(
          taglineRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="hero" ref={sectionRef}>
      <div className="hero__content">
        <p className="hero__sub" ref={subRef}>
          <span className="hero__dash">—</span> Developer & Designer
        </p>

        <div className="hero__headline" ref={headlineRef}>
          <h1>
            <span className="hero__line">Creative</span>
            <span className="hero__line hero__line--accent">Designer</span>
            <span className="hero__line">&amp; Developer</span>
          </h1>
        </div>

        <p className="hero__tagline" ref={taglineRef}>
          Crafting digital experiences with analog soul. <br />
          Where vintage aesthetics meet modern code.
        </p>

        <div className="hero__scroll-hint">
          <span className="hero__scroll-text">Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="hero__stamp hero__stamp--1">EST. 2024</div>
      <div className="hero__stamp hero__stamp--2">✦</div>
      <div className="hero__circle" />
    </section>
  );
}
