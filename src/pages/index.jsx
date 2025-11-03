import React, { useEffect } from "react";
import { Link } from "gatsby";
import Seo from "../components/Seo";
import Slider from "react-slick";
import ParticleRing from "../components/ParticleRing";
import companyImage from "../images/M1.jpg";

const testimonials = [
  {
    quote:
      "AUTOMEL transformed our workflow — automation cut our processing time in half!",
    name: "Rhoy Sampaga",
    role: "Operations Manager, Acme Inc.",
  },
  {
    quote:
      "The team is incredibly supportive. We scaled faster than we thought possible.",
    name: "Jake Llera",
    role: "Founder, Growthly",
  },
  {
    quote: "Reliable, intuitive, and beautifully designed. AUTOMEL just works.",
    name: "Remelito Labanan",
    role: "CTO, TechWave",
  },
  {
    quote: "AUTOMEL is reliable, easy to use, and beautifully designed.",
    name: "DocYummy",
    role: "CEO, Yummy Clinic",
  },
];

export default function IndexPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      window.mouseX = e.clientX;
      window.mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Seo url="https://example.com/careers" />

      <section id="home" className="section hero">
        <div className="particle-bg">
          <ParticleRing />
        </div>

        <div className="container hero-content">
          <h1>Spread Efficiency. Automate Growth.</h1>
          <p>
            At <strong>AUTOMEL</strong>, we craft automation solutions that stick—
            streamlining your workflows, reducing costs, and helping your
            business thrive. Like peanut butter & jelly, our technology blends
            seamlessly with your operations.
          </p>
          <div className="cta button-group">
            <a href="#products" className="btn">
              Explore Our Solutions
            </a>
            <Link to="/careers" className="btn ghost">
              Careers
            </Link>
          </div>
        </div>
      </section>

      <section
        id="tagline"
        d="tagline"
        className="section pop testimonies-section"
      >
        <div class="container">
          <h2 className="testimonials-title">What People Are Saying</h2>
          <Slider {...settings} className="testimonials-slider">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <p className="quote">“{t.quote}”</p>
                <p className="author">
                  <strong>{t.name}</strong> — {t.role}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section id="about" data-section="about" className="section light-spread">
        <div className="container">
          <h2>About AUTOMEL</h2>
          <p>
            AUTOMEL builds practical, scalable, and human-centered automation. Our
            engineers, developers, and industry experts combine innovation,
            reliability, and scalability—like the perfect AUTOMEL—to make your
            business stronger and more satisfying.
          </p>

          <div className="about-carousel">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={4000}
            >
              <div>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                  alt="Team collaboration"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
                  alt="Workflow automation"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern workspace"
                />
              </div>
              <div>
                <img
                  src={companyImage}
                  alt="Company Meetings"
                />
              </div>
            </Slider>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <h3>🚀 Mission</h3>
              <p>Bringing the power of automation to every business</p>
            </div>
            <div className="about-card">
              <h3>🤝 Values</h3>
              <p>Driving Growth Through Innovation, Efficiency, and Partnership</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="products"
        data-section="products"
        className="section butter pricing-section"
      >
        <div className="container">
          <h2>Products & Pricing</h2>

          <div className="pricing-grid">
            {/* Starter */}
            <div className="pricing-card">
              <h3 className="plan-name">The Starter Jar</h3>
              <div className="price">
                <span className="currency">₱</span>2500
                <span className="per">/mo</span>
              </div>
              <p className="subtitle">
                For small teams starting with automation.
              </p>
              <button className="btn">Get Started</button>

              <div className="features">
                <h4>Features</h4>
                <ul>
                  <li>Up to 3 automated workflows</li>
                  <li>Core RPA bots</li>
                  <li>Basic data integration</li>
                  <li>Email support</li>
                </ul>
              </div>
            </div>

            {/* Growth */}
            <div className="pricing-card popular">
              <h3 className="plan-name">Growth Spread</h3>
              <div className="price">
                <span className="currency">₱</span>7500
                <span className="per">/mo</span>
              </div>
              <p className="subtitle">
                Advanced features for scaling businesses.
              </p>
              <button className="btn">Get Started</button>

              <div className="features">
                <h4>Features</h4>
                <ul>
                  <li>Unlimited workflows</li>
                  <li>Advanced RPA bots</li>
                  <li>Multi-platform data sync</li>
                  <li>AI-powered insights</li>
                  <li>Priority support</li>
                </ul>
              </div>
            </div>

            {/* Enterprise */}
            <div className="pricing-card">
              <h3 className="plan-name">Enterprise Combo</h3>
              <div className="price custom">Custom Pricing</div>
              <p className="subtitle">
                Tailored solutions & dedicated support.
              </p>
              <button className="btn">Get Started</button>

              <div className="features">
                <h4>Features</h4>
                <ul>
                  <li>Fully custom workflow design</li>
                  <li>Unlimited bots & integrations</li>
                  <li>Enterprise-grade security</li>
                  <li>Dedicated success manager</li>
                  <li>24/7 premium support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        data-section="contact"
        className="section contact-section"
      >
        <div className="container">
          <h2>Contact</h2>
          <p className="subtitle">
            We’d love to spread some solutions your way 🚀
          </p>

          <div className="contact-grid">
            <div className="contact-info">
              <p>
                📍 <strong>Office:</strong> 2600 Legarda St., Sampaloc, Manila.
              </p>
              <p>
                📞 <strong>Phone:</strong> 09162173628
              </p>
              <p>
                📧 <strong>Email:</strong>{" "}
                <a href="mailto:info@automel.comauto">info@automel.com</a>
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Submitted — replace with real form handling");
              }}
            >
              <label>
                <span>Name</span>
                <input name="name" required />
              </label>
              <label>
                <span>Email</span>
                <input name="email" type="email" required />
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" rows={4} required />
              </label>
              <button className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
