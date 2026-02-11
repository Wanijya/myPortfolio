import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Loader.css";

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null);
  const barRef = useRef(null);
  const counterRef = useRef(null);
  const badgeRef = useRef(null);
  const innerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animation — fade in elements
      const introTl = gsap.timeline({ defaults: { ease: "power2.out" } });

      introTl
        .from(badgeRef.current, {
          scale: 0,
          rotate: -180,
          duration: 0.6,
        })
        .from(
          ".loader__track",
          {
            scaleX: 0,
            duration: 0.5,
          },
          "-=0.2",
        )
        .from(
          ".loader__counter",
          {
            opacity: 0,
            y: 10,
            duration: 0.3,
          },
          "-=0.2",
        )
        .from(
          ".loader__text",
          {
            opacity: 0,
            duration: 0.3,
          },
          "-=0.1",
        )
        .from(
          ".loader__corner",
          {
            opacity: 0,
            scale: 0,
            stagger: 0.08,
            duration: 0.3,
          },
          "-=0.3",
        );

      // Progress bar fill
      const progressObj = { value: 0 };

      gsap.to(progressObj, {
        value: 100,
        duration: 2.2,
        ease: "power1.inOut",
        onUpdate: () => {
          const val = Math.round(progressObj.value);
          setProgress(val);
          if (barRef.current) {
            barRef.current.style.width = `${val}%`;
          }
        },
        onComplete: () => {
          // Exit animation
          const exitTl = gsap.timeline({
            onComplete: () => onComplete?.(),
          });

          exitTl
            .to(innerRef.current, {
              scale: 0.9,
              opacity: 0,
              duration: 0.4,
              ease: "power2.in",
            })
            .to(
              ".loader__corner",
              {
                opacity: 0,
                duration: 0.2,
              },
              "-=0.3",
            )
            .to(loaderRef.current, {
              yPercent: -100,
              duration: 0.8,
              ease: "power4.inOut",
            });
        },
      });
    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="loader" ref={loaderRef}>
      {/* Decorative rings */}
      <div className="loader__ring" />
      <div className="loader__ring loader__ring--lg" />

      {/* Corner marks */}
      <div className="loader__corner loader__corner--tl" />
      <div className="loader__corner loader__corner--tr" />
      <div className="loader__corner loader__corner--bl" />
      <div className="loader__corner loader__corner--br" />

      {/* Main content */}
      <div className="loader__inner" ref={innerRef}>
        <div className="loader__badge" ref={badgeRef}>
          ✦
        </div>

        <div className="loader__track">
          <div className="loader__bar" ref={barRef} />
        </div>

        <span className="loader__counter" ref={counterRef}>
          {String(progress).padStart(3, "0")}%
        </span>

        <span className="loader__text">I'm Wanijya.</span>
      </div>
    </div>
  );
}
