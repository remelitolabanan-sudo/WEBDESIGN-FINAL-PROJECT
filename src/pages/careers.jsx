import React, { useEffect } from "react";
import Seo from "../components/Seo";

const jobs = [
  {
    title: "Automation Engineer",
    description:
      "Design and build scalable automation systems that streamline business workflows and improve efficiency.",
  },
  {
    title: "Full Stack Developer",
    description:
      "Develop robust front-end and back-end features, ensuring seamless user experiences across platforms.",
  },
  {
    title: "Sales & Partnerships Specialist",
    description:
      "Drive growth by building partnerships, nurturing client relationships, and expanding our reach.",
  },
  {
    title: "Customer Success Manager",
    description:
      "Support clients, ensure successful onboarding, and help businesses get the most out of our solutions.",
  },
];

export default function CareersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Seo
        title="Careers"
        description="Join our team and build your career with us!"
        url="https://example.com/careers"
      />
      <section className="section careers">
        <div className="container">
          <h1 className="careers-title">Careers at AUTOMEL</h1>
          <p className="careers-intro">
            We’re building the future of automation—one layer at a time. Join us
            and be part of something that sticks.
          </p>
          <h2 className="careers-subtitle">Open Positions</h2>
          <ul className="careers-list">
            {jobs.map((job) => (
              <li key={job.title} className="card">
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <a href="/#contact" className="btn">
                  Apply Now
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
