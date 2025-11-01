import React, { useEffect } from 'react'
import aboutIcon1 from '../../img/about-icon-1.png';
import aboutIcon2 from '../../img/about-icon-2.png';
import aboutImg from '../../img/extra/IMG-20251019-WA0026.jpg';
import aboutImg1 from '../../img/about-img-1.jpg';
import why from '../../img/why.jpg';
import banner1 from '../../img/extra/IMG-20251019-WA0048.jpg';

import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../img/extra/', false, /\.(png|jpe?g|svg)$/));

export default function About() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: 'ease-in-out-cubic',
      once: false,
      mirror: true,
      offset: 50
    });
  }, []);


// AOS animation configurations for different directions
  const getAosAnimation = (index) => {
    const animations = [
      'fade-up', 'fade-down', 'fade-left', 'fade-right',
      'zoom-in', 'flip-left', 'flip-right', 'flip-up', 'flip-down'
    ];
    return animations[index % animations.length];
  };

  // Different durations for variety
  const getAosDuration = (index) => {
    return 600 + (index % 5) * 100; // 600ms to 1000ms
  };

  // Different delays for staggered effect
  const getAosDelay = (index) => {
    return (index % 8) * 100; // 0ms to 700ms
  };
    
    return (
        <>
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">About Us</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="">Pages</Link></li>
                        <li className="breadcrumb-item active text-primary">About</li>
                    </ol>    
                </div>
            </div>

    {/* About Start */}
    <div className="container-fluid overflow-hidden about py-5">
      <div className="container-fluid py-5">
        <div className="row g-5">
          {/* Left Column - Content */}
          <div className="col-xl-6" data-aos="fade-right" data-aos-delay="200">
            <div className="about-item">
              <div className="pb-5">
                <h1 className="display-5 text-capitalize"> <span className="text-primary">About Us </span> </h1>
                <p className="mb-0  ">
                  Outlook Digital Solutions is a leading provider
                  of innovative technology solutions,
                  specializing in interactive panels, sound
                  systems, and computers. Our mission is to
                  enhance user experiences through cuttingedge digital solutions tailored to meet the
                  needs of our clients.            </p>
              </div>

              {/* Vision & Mission Cards */}
              <div className="row g-4">
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="about-item-inner border p-4">
                    <div className="about-icon mb-4">
                      <img src={aboutIcon1} className="img-fluid w-50 h-50" alt="Vision Icon" />
                    </div>
                    <h5 className="mb-3 ">Our Vision</h5>
                    <p className="mb-0">To be a trusted partner in digital
                      transformation, empowering businesses and
                      educational institutions with innovative
                      technology solutions that enhance productivity
                      and collaboration.</p>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                  <div className="about-item-inner border p-4">
                    <div className="about-icon mb-4">
                      <img src={aboutIcon2} className="img-fluid h-50 w-50" alt="Mission Icon" />
                    </div>
                    <h5 className="mb-3">Our Mission</h5>
                    <p className="mb-0">To deliver high-quality, reliable, and user-friendly
                      technology products that meet the evolving needs
                      of our customers..</p>
                  </div>
                </div>
              </div>


              {/* Experience & Features */}
              <div className="row g-4">
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="text-center rounded p-4">
                    <h1 className="display-6 text-white">17</h1>
                    <h5 className="text-light mb-0">Years Of Experience</h5>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                  <div className="rounded">
                    <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> Accountability</p>
                    <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> Excellence</p>
                    <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> Integrity</p>
                    <p className="mb-0"><i className="fa fa-check-circle text-primary me-1"></i> After-sales service
                    </p>
                  </div>
                </div>

                {/* CTA & Founder */}
                <div className="col-lg-5 d-flex align-items-center" data-aos="fade-up" data-aos-delay="500">
                  <Link to="/about" className="btn btn-primary rounded py-3 px-5">More About Us</Link>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="col-xl-6 ps-5" data-aos="fade-left" data-aos-delay="200">
            <div className="about-img">
              <div className="img-1">
                <img
                  src={aboutImg}
                  className="img-fluid rounded h-100 w-75 ms-5"
                  alt="About us"
                />
              </div>
              <div className="img-2" data-aos="fade-up" data-aos-delay="400">
                <img
                  src={aboutImg1}
                  className="img-fluid rounded w-75 ms-3"
                  alt="About us secondary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    <div className="image-gallery-container">
      <div className="gallery-header ">
        <h2 
          className="gallery-title"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
Company fields        </h2>
    
      </div>
      
      <div className="masonry-grid">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`masonry-item masonry-size-${(index % 5) + 1}`}
            data-aos={getAosAnimation(index)}
            data-aos-duration={getAosDuration(index)}
            data-aos-delay={getAosDelay(index)}
            data-aos-easing="ease-in-out-cubic"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="image-card">
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`}
                className="gallery-image"
                loading="lazy"
              />
           
            </div>
          </div>
        ))}
      </div>
      
 
    </div>
    {/* Why Choose Us Section */}
    <div className="container-fluid py-5 ">
      <div className="container-fluid py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="mb-4">
              <h1 className="display-5 text-capitalize mb-4">
                <span className="text-primary">Why Choose Us?</span> 
              </h1>
            </div>
            <div className="row g-4">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className=" p-4 rounded shadow">
                  <h5 className="mb-3">Expertise</h5>
                  <p className="mb-0">
                    A team of experienced professionals dedicated to providing top-notch solutions.
                  </p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className=" p-4 rounded shadow">
                  <h5 className="mb-3">Customer-Centric Approach</h5>
                  <p className="mb-0">
                    We prioritize our clients' needs and work closely to deliver customized solutions.
                  </p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className=" p-4 rounded shadow">
                  <h5 className="mb-3">Innovation</h5>
                  <p className="mb-0">
                    Constantly exploring the latest technologies to provide cutting-edge products.
                  </p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div className=" p-4 rounded shadow">
                  <h5 className="mb-3">Quality Assurance</h5>
                  <p className="mb-0">
                    Rigorous testing and quality control measures to ensure reliable performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="rounded overflow-hidden">
              <img
                src={why} // You might want to use a different image here
                className="img-fluid rounded"
                alt="Why Choose Us"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
        {/* fact start */}

    <div className="container-fluid counter  py-5">
      <div className="container-fluid py-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
            <div className="counter-item text-center">
              <div className="counter-item-icon mx-auto">
                <i className="fas fa-thumbs-up fa-2x"></i>
              </div>
              <div className="counter-counting my-3">
                <span className="text-white fs-2 fw-bold" data-toggle="counter-up">829</span>
                <span className="h1 fw-bold text-white">+</span>
              </div>
              <h4 className="text-white mb-0">Happy Clients</h4>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
            <div className="counter-item text-center">
              <div className="counter-item-icon mx-auto">
                <i className="fas fa-car-alt fa-2x"></i>
              </div>
              <div className="counter-counting my-3">
                <span className="text-white fs-2 fw-bold" data-toggle="counter-up">720</span>
                <span className="h1 fw-bold text-white">+</span>
              </div>
              <h4 className="text-white mb-0">Customer Reviews
              </h4>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
            <div className="counter-item text-center">
              <div className="counter-item-icon mx-auto">
                <i className="fas fa-building fa-2x"></i>
              </div>
              <div className="counter-counting my-3">
                <span className="text-white fs-2 fw-bold" data-toggle="counter-up">127</span>
                <span className="h1 fw-bold text-white">+</span>
              </div>
              <h4 className="text-white mb-0">completed deals</h4>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
            <div className="counter-item text-center">
              <div className="counter-item-icon mx-auto">
                <i className="fas fa-clock fa-2x"></i>
              </div>
              <div className="counter-counting my-3">
                <span className="text-white fs-2 fw-bold" data-toggle="counter-up">200</span>
                <span className="h1 fw-bold text-white">+</span>
              </div>
              <h4 className="text-white mb-0">Total projects</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* fact end */}
     <div className="container-fluid banner pb-5 wow zoomInDown" data-wow-delay="0.1s">
  <div className="container-fluid pb-5">
    <div className="banner-item rounded position-relative">
      <img 
        src={banner1} 
        className="img-fluid rounded w-100" 
        alt="Digital Transformation Solutions" 
        style={{height: "100", objectFit: "cover"}}
      />
      <div className="banner-content position-absolute top-50 start-50 translate-middle text-center">
        <h2 className="text-primary">Transform Your Space</h2>
        <h1 className="text-white">Ready for Digital Innovation?</h1>
        <p className="text-white">Let's discuss how our technology solutions can enhance your business or educational environment.</p>
        <div className="banner-btn">
          <Link to="/contact" className="btn btn-secondary rounded-pill py-3 px-4 px-md-5 me-2">Get Free Consultation</Link>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}