import React, { useEffect, useRef } from 'react';
// Replace the direct import
// import aboutImage from '../assets/img/about.png';

// Use this instead
const aboutImage = env.PUBLIC_URL + '/assets/img/about.png';

const AboutUs = () => {
  const skillSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBars = entry.target.querySelectorAll('.progress-bar');
          progressBars.forEach((bar) => {
            const value = bar.getAttribute('aria-valuenow');
            bar.style.width = `${value}%`;
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.2,
    });

    if (skillSectionRef.current) {
      observer.observe(skillSectionRef.current);
    }

    return () => {
      if (skillSectionRef.current) {
        observer.unobserve(skillSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="container-xxl py-2" ref={skillSectionRef}>
      <div className="container py-5 px-lg-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <p className="section-title text-secondary">
              About Us<span></span>
            </p>
            <h1 className="mb-5">#1 Digital solution with 15 years of experience</h1>
            <p className="mb-4">
              For the past decade, we have been at the forefront of digital transformation, providing cutting-edge solutions that drive business success. Our expertise spans across various digital services, ensuring that our clients receive the most innovative and effective strategies tailored to their unique needs.
            </p>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">Digital Marketing</p>
                <p className="mb-2">85%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '0%' }} 
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">SEO & Backlinks</p>
                <p className="mb-2">90%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-secondary"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '0%' }}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">Design & Development</p>
                <p className="mb-2">95%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-dark"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '0%' }}
                ></div>
              </div>
            </div>
            <a href="#" className="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3">
              Read More
            </a>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid wow zoomIn" data-wow-delay="0.5s" src={aboutImage} alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
