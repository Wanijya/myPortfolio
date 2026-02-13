import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";

const MARQUEE_TEXT =
  "CREATIVE DESIGN ✦ MODERN CODE ✦ RETRO SOUL ✦ PIXEL PERFECT ✦ ";

const Hero = () => {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const taglineRef = useRef(null);
  const badgesRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        delay: 0.2,
      });

      // Subtitle scramble-in
      tl.from(subRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        skewY: 3,
      })
        // Headline lines stagger in from below with rotation
        .from(
          headlineRef.current.querySelectorAll(".hero__line"),
          {
            y: 120,
            opacity: 0,
            rotateX: -40,
            duration: 1.1,
            stagger: 0.18,
          },
          "-=0.4",
        )
        // Tagline fades in
        .from(
          taglineRef.current,
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5",
        )
        // Marquee slides in
        .from(
          marqueeRef.current,
          {
            scaleX: 0,
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
          },
          "-=0.3",
        )
        // Badges pop in
        .from(
          badgesRef.current.children,
          {
            scale: 0,
            opacity: 0,
            rotation: -20,
            duration: 0.6,
            stagger: 0.12,
            ease: "back.out(1.7)",
          },
          "-=0.5",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="hero" ref={sectionRef}>
      <div className="hero__content">
        <p className="hero__sub" ref={subRef}>
          <span className="hero__dash">—</span> Developer &amp; Designer
        </p>

        <div className="hero__headline" ref={headlineRef}>
          <h1>
            <span className="hero__line">Creative</span>
            <span
              className="hero__line hero__line--accent"
              data-text="Designer"
            >
              Designer
            </span>
            <span className="hero__line">&amp; Developer</span>
          </h1>
        </div>

        <p className="hero__tagline" ref={taglineRef}>
          Crafting digital experiences with analog soul. <br />
          Where vintage aesthetics meet modern code.
        </p>
      </div>

      {/* Marquee ticker strip */}
      <div className="hero__marquee" ref={marqueeRef}>
        <div className="hero__marquee-track">
          <span>{MARQUEE_TEXT.repeat(4)}</span>
          <span aria-hidden="true">{MARQUEE_TEXT.repeat(4)}</span>
        </div>
      </div>

      {/* Decorative badges */}
      <div className="hero__badges" ref={badgesRef}>
        <div className="hero__badge hero__badge--1">EST. 2024</div>
        <div className="hero__badge hero__badge--2">✦</div>
        <div className="hero__badge hero__badge--3">PORTFOLIO</div>
        <div className="hero__badge hero__badge--4">WB.</div>
      </div>

      {/* Scroll CTA */}
      <div className="hero__scroll-cta">
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-arrow">
          <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
            <path
              d="M10 0 L10 26 M2 18 L10 26 L18 18"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>

      {/* Background decorative circle */}
      <div className="hero__circle" />
    </section>
  );
};

export default Hero;
