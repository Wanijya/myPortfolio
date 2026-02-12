import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact__form", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact__form",
          start: "top 85%",
        },
      });

      gsap.from(".contact__info-item", {
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact__info",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="contact section-padding" ref={sectionRef}>
      <div className="container">
        <div className="contact__header">
          <span className="contact__label">— Get In Touch</span>
          <h2 className="contact__title">Contact</h2>
          <p className="contact__subtitle">
            Got a project in mind? Let&apos;s make something great together.
          </p>
        </div>

        <div className="contact__grid">
          {/* Form */}
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-fields">
              <div className="contact__field">
                <label className="contact__field-label" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="contact__input"
                  placeholder="Your name..."
                  required
                />
              </div>

              <div className="contact__field">
                <label className="contact__field-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="contact__input"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="contact__field">
                <label className="contact__field-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="contact__input contact__textarea"
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                />
              </div>

              <button type="submit" className="retro-btn contact__submit">
                Send Message
              </button>
            </div>

            <div className="contact__form-stamp">MAIL ✦</div>
          </form>

          {/* Info */}
          <div className="contact__info">
            <div className="contact__info-item">
              <span className="contact__info-label">Email</span>
              <a href="mailto:hello@wb.design" className="contact__info-value">
                hello@wb.design
              </a>
            </div>

            <div className="contact__info-item">
              <span className="contact__info-label">Location</span>
              <span className="contact__info-value">Worldwide / Remote</span>
            </div>

            <div className="contact__info-item">
              <span className="contact__info-label">Socials</span>
              <div className="contact__socials">
                <a href="#" className="contact__social-link">
                  Twitter
                </a>
                <a href="#" className="contact__social-link">
                  GitHub
                </a>
                <a href="#" className="contact__social-link">
                  LinkedIn
                </a>
                <a href="#" className="contact__social-link">
                  Dribbble
                </a>
              </div>
            </div>

            <div className="contact__info-stamp">
              <span>OPEN FOR</span>
              <span>FREELANCE</span>
              <span>WORK ✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
