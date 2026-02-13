import { useRef, useState, useEffect } from "react";

const LazySection = ({ children }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return <div ref={ref}>{show ? children : null}</div>;
};

export default LazySection;
