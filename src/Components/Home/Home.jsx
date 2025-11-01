import React, { useEffect, useState } from 'react'
import aboutIcon1 from '../../img/about-icon-1.png';
import aboutIcon2 from '../../img/about-icon-2.png';
import aboutImg from '../../img/extra/IMG-20251019-WA0026.jpg';
import aboutImg1 from '../../img/about-img-1.jpg';
import feat from "../../img/features-img.png"
import why from '../../img/why.jpg';
import prod1 from '../../img/extra/IMG-20251019-WA0021.jpg';
import prod2 from '../../img/extra/IMG-20251019-WA0022.jpg';
import prod3 from '../../img/extra/IMG-20251019-WA0023.jpg';
import prod4 from '../../img/extra/IMG-20251019-WA0024.jpg';
import blog1 from '../../img/extra/IMG-20251019-WA0025.jpg';
import blog2 from '../../img/extra/IMG-20251019-WA0026.jpg';
import blog3 from '../../img/extra/IMG-20251019-WA0027.jpg';
import banner1 from '../../img/extra/IMG-20251019-WA0048.jpg';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../img/extra/', false, /\.(png|jpe?g|svg)$/));
export default function Home() {

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

  const [currentService, setCurrentService] = useState(0);
  
  const services = [
    { icon: "fas fa-tv", title: "Interactive Screens", desc: "Advanced interactive display solutions" },
    { icon: "fas fa-camera", title: "IP Surveillance Cameras", desc: "High-quality IP camera systems" },
    { icon: "fas fa-volume-up", title: "Audio Systems", desc: "Complete audio solutions of all types" },
    { icon: "fas fa-desktop", title: "Computer Labs Setup", desc: "Professional computer lab equipment" },
    { icon: "fas fa-laptop", title: "Laptop Solutions", desc: "Comprehensive laptop services" },
    { icon: "fas fa-code", title: "Software Solutions", desc: "Custom software development" }
  ];




  return <>

{/* Video Hero Section */}
      <div className="video-hero-section">
        {/* Background Video */}
  <video 
  autoPlay 
  muted 
  loop 
  playsInline
  className="hero-video"
  onError={(e) => console.error('Video failed to load:', e)}
>
  <source src="/videos/video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
        
        {/* Dark Overlay */}
        <div className="video-overlay"></div>
        
        {/* Content */}
      
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

              {/* Vision & Mission prodds */}
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
    {/* company fields */}
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
            <div className="image-prodd">
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
        {/* company fields */}

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
        {/* Why Choose Us Section */}

    {/* servces start */}

   <div className="container-fluid service py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
          <h1 className="display-5 text-capitalize mb-3">Our <span className="text-primary">Services</span></h1>
          <p className="mb-0 lead">
            Transforming spaces with cutting-edge technology and innovative digital solutions
          </p>
        </div>
        
        <div className="row g-4">
          {/* INTERACTIVE PANELS */}
          <div className="col-md-6 col-lg-6">
            <div className="service-item h-100 p-4 d-flex flex-column shadow-lg rounded-3 border-0">
              <div className="service-icon mb-4 text-center text-primary">
                <i className="fas fa-thumbs-up fa-2x text-dark"></i>
              </div>
              <h4 className="mb-3 text-center flex-grow-1 fw-bold">INTERACTIVE PANELS</h4>
              <div className="service-features mb-3">
                <div className="feature-item d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2 "></i>
                  <span>High-resolution display with vivid clarity</span>
                </div>
                <div className="feature-item d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <span>Smooth and responsive touch performance</span>
                </div>
                <div className="feature-item d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <span>First interactive panel with built-in AI capabilities</span>
                </div>
                <div className="feature-item d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <span>Reliable operation with expert after-sales service</span>
                </div>
              </div>
              <p className="mb-3 text-muted">
                <strong>STRIVE interactive panels</strong> are designed to elevate communication and collaboration 
                in classrooms and meeting spaces. With crystal-clear touch displays, smooth performance, 
                and professional local support, they deliver an effortless and inspiring digital experience.
              </p>
              <p className="mb-3 text-muted">
                They are used in modern classrooms or meeting rooms to encourage interaction and creativity.
              </p>
           
            </div>
          </div>

          {/* INTEGRATED AUDIO SYSTEMS */}
          <div className="col-md-6 col-lg-6">
            <div className="service-item h-100 p-4 d-flex flex-column shadow-lg rounded-3 border-0">
              <div className="service-icon mb-4 text-center text-primary">
                <i className="fas fa-volume-up fa-2x text-dark"></i>
              </div>
              <h4 className="mb-3 text-center flex-grow-1 fw-bold">INTEGRATED AUDIO SYSTEMS</h4>
              <div className="service-features mb-3">
                <div className="feature-item d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <span>High-quality audio systems for all spaces</span>
                </div>
                <div className="feature-item d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <span>Coverage from large auditoriums to small rooms</span>
                </div>
                <div className="feature-item d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <span>Continuous technical support from experts</span>
                </div>
                <div className="feature-item d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <span>Comprehensive solutions with full coverage</span>
                </div>
              </div>
              <p className="mb-3 text-muted">
                <strong>STRIVE – FUTURE EYES</strong> - Our goal is to provide high-quality audio systems 
                suitable for all spaces, both indoor and outdoor. We specialize in delivering audio solutions 
                that ensure the best performance and experience for every space.
              </p>
             
            </div>
          </div>

          {/* MUSICAL INSTRUMENTS & STAGE EQUIPMENT */}
          <div className="col-md-6 col-lg-6">
            <div className="service-item h-100 p-4 d-flex flex-column shadow-lg rounded-3 border-0">
              <div className="service-icon mb-4 text-center text-primary">
                <i className="fas fa-music fa-2x text-dark"></i>
              </div>
              <h4 className="mb-3 text-center flex-grow-1 fw-bold">MUSICAL INSTRUMENTS & STAGE EQUIPMENT</h4>
              <div className="service-features mb-3">
                <div className="feature-item d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <span>Exceptional sound quality and durability</span>
                </div>
                <div className="feature-item d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <span>Professional equipment for schools and studios</span>
                </div>
                <div className="feature-item d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <span>Perfect for live performances</span>
                </div>
                <div className="feature-item d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <span>Easy to use and maintain</span>
                </div>
              </div>
              <p className="mb-3 text-muted">
                Our range of professional musical instruments and stage equipment is designed to deliver 
                exceptional sound quality, durability, and ease of use. Perfect for schools, studios, and 
                live performances, our products help musicians and performers bring their creativity to life.
              </p>
            
            </div>
          </div>

          {/* MOBILE APPLICATIONS & SMART DIGITAL SYSTEMS */}
          <div className="col-md-6 col-lg-6">
            <div className="service-item h-100 p-4 d-flex flex-column shadow-lg rounded-3 border-0">
              <div className="service-icon mb-4 text-center text-primary">
                <i className="fas fa-mobile-alt fa-2x text-dark"></i>
              </div>
              <h4 className="mb-3 text-center flex-grow-1 fw-bold">MOBILE APPLICATIONS & SMART DIGITAL SYSTEMS</h4>
              <div className="service-features mb-3">
                <div className="feature-item d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <span>Custom mobile apps for schools and businesses</span>
                </div>
                <div className="feature-item d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <span>Smart systems and dashboards built on demand</span>
                </div>
                <div className="feature-item d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <span>Seamless integration with interactive panels</span>
                </div>
                <div className="feature-item d-flex align-items-center mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <span>Tailored to your specific business goals</span>
                </div>
              </div>
              <p className="mb-3 text-muted">
                We design and develop custom-made digital systems and mobile applications tailored to your 
                specific needs and business goals. Our solutions simplify management, enhance communication, 
                and support digital transformation for schools and companies.
              </p>
              <p className="mb-3 fst-italic text-primary">
                DIGITAL SOLUTIONS DESIGNED JUST FOR YOU
              </p>
          
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* servces end */}

    {/* CORE VALUES Start */}
    <div className="container-fluid feature py-5">
      <div className="container-fluid py-5">
        <div
          className="text-center mx-auto pb-5"
          data-aos="fade-up"
          data-aos-delay="100"
          style={{ maxWidth: "800px" }}
        >
          <h1 className="display-5 text-capitalize mb-3"><span className="text-primary">Outlook Digital Sulotion CORE VALUES
          </span></h1>

        </div>
        <div className="row g-4 align-items-center">
          <div className="col-xl-4">
            <div className="row gy-4 gx-0">
              <div className="col-12" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-item">
                  <div className="feature-icon">
                    <span className="fa fa-trophy fa-2x"></span>
                  </div>
                  <div className="ms-4">
                    <h5 className="mb-3">Accountability</h5>
                    <p className="mb-0">
                      We take responsibility for our actions
                      and results.</p>
                  </div>
                </div>
              </div>
              <div className="col-12" data-aos="fade-up" data-aos-delay="300">
                <div className="feature-item">
                  <div className="feature-icon">
                    <span className="fa fa-road fa-2x"></span>
                  </div>
                  <div className="ms-4">
                    <h5 className="mb-3">Excellence</h5>
                    <p className="mb-0">
                      We are dedicated to providing top-tier
                      consultation services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-xl-4" data-aos="fade-up" data-aos-delay="200">
            <img
              src={feat}
              className="img-fluid w-100"
              style={{ objectFit: "cover" }}
              alt="Features"
            />
          </div>
          <div className="col-xl-4">
            <div className="row gy-4 gx-0">
              <div className="col-12" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-item justify-content-end">
                  <div className="text-end me-4">
                    <h5 className="mb-3">Integrity</h5>
                    <p className="mb-0">We maintain high ethical standards.
                    </p>
                  </div>
                  <div className="feature-icon">
                    <span className="fa fa-tag fa-2x"></span>
                  </div>
                </div>
              </div>
              <div className="col-12" data-aos="fade-up" data-aos-delay="300">
                <div className="feature-item justify-content-end">
                  <div className="text-end me-4">
                    <h5 className="mb-3">After-sales service
                    </h5>
                    <p className="mb-0">
                      The team is distinguished by its after-sales
                      service, as certified by our clients                  </p>
                  </div>
                  <div className="feature-icon">
                    <span className="fa fa-map-pin fa-2x"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Features End */}
      {/* banner 1 Start */}
    <div className="container-fluid steps py-5">
  <div className="container-fluid py-5">
    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "800px"}}>
      <h1 className="display-5 text-capitalize text-white mb-3">Our<span className="text-primary"> Process</span></h1>
      <p className="mb-0 text-white">
        At Outlook Digital Solutions, we follow a streamlined process to ensure seamless integration 
        of technology solutions that transform your business operations and enhance user experiences.
      </p>
    </div>
    <div className="row g-4">
      <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
        <div className="steps-item p-4 mb-4">
          <h4>Consultation & Assessment</h4>
          <p className="mb-0">We begin with a comprehensive analysis of your technology needs, infrastructure, and business objectives to design the perfect digital solution.</p>
          <div className="setps-number">01.</div>
        </div>
      </div>
      <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
        <div className="steps-item p-4 mb-4">
          <h4>Solution Design & Planning</h4>
          <p className="mb-0">Our experts create customized technology blueprints featuring interactive panels, audio systems, and security solutions tailored to your space.</p>
          <div className="setps-number">02.</div>
        </div>
      </div>
      <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
        <div className="steps-item p-4 mb-4">
          <h4>Implementation & Training</h4>
          <p className="mb-0">Professional installation followed by comprehensive staff training to ensure smooth adoption and maximum utilization of your new technology.</p>
          <div className="setps-number">03.</div>
        </div>
      </div>
    </div>
  </div>
</div>
      {/* banner 1  End */}

      {/* news Start */}
    <div className="container-fluid blog py-5">
  <div className="container-fluid py-5">
    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "800px"}}>
      <h1 className="display-5 text-capitalize mb-3">Outlook<span className="text-primary"> Insights & News</span></h1>
      <p className="mb-0">
        Stay updated with the latest trends in digital technology, interactive solutions, and innovative 
        systems that are transforming businesses and educational institutions worldwide.
      </p>
    </div>
    <div className="row g-4">
      <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
        <div className="blog-item h-100">
          <div className="blog-img" style={{height: "250px", overflow: "hidden"}}>
            <img 
              src={blog1} 
              className="img-fluid rounded-top w-100 h-100" 
              alt="Interactive Panels Revolutionizing Classroom Learning" 
              style={{objectFit: "cover"}}
            />
          </div>
          <div className="blog-content rounded-bottom p-4 d-flex flex-column h-100">
          
            <Link to="#" className="h4 d-block text-light mb-3">Interactive Panels Revolutionizing Classroom Learning</Link>
            <p className="mb-3">Discover how interactive flat panels are transforming educational environments and boosting student engagement through immersive digital experiences.</p>
            <Link to="#" className="mt-auto">Read More  <i className="fa fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
        <div className="blog-item h-100">
          <div className="blog-img" style={{height: "250px", overflow: "hidden"}}>
            <img 
              src={blog2} 
              className="img-fluid rounded-top w-100 h-100" 
              alt="IP Surveillance Systems for Modern Business Security" 
              style={{objectFit: "cover"}}
            />
          </div>
          <div className="blog-content rounded-bottom p-4 d-flex flex-column h-100">
           
            <Link to="#" className="h4 d-block text-light mb-3">IP Surveillance Systems for Modern Business Security</Link>
            <p className="mb-3">Learn how advanced IP camera systems provide comprehensive security solutions with remote monitoring and intelligent analytics for businesses.</p>
            <Link to="#" className="mt-auto">Read More  <i className="fa fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
        <div className="blog-item h-100">
          <div className="blog-img" style={{height: "250px", overflow: "hidden"}}>
            <img 
              src={blog3} 
              className="img-fluid rounded-top w-100 h-100" 
              alt="Integrated Audio Solutions for Enhanced Collaboration" 
              style={{objectFit: "cover"}}
            />
          </div>
          <div className="blog-content rounded-bottom p-4 d-flex flex-column h-100">
          
            <Link to="#" className="h4 d-block text-light mb-3">Integrated Audio Solutions for Enhanced Collaboration</Link>
            <p className="mb-3">Explore how professional audio systems are creating optimal sound environments for conference rooms, classrooms, and corporate spaces.</p>
            <Link to="#" className="mt-auto">Read More  <i className="fa fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      {/* news End */}

      {/* Banner 2 Start */}
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
      {/* Banner 2 End */}
      {/* products start */}
<div className="container-fluid categories pb-5">
  <div className="container-fluid pb-5">
    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "800px"}}>
      <h1 className="display-5 text-capitalize mb-3">Our <span className="text-primary">Technology Solutions</span></h1>
      <p className="mb-0">
        Explore our comprehensive range of cutting-edge technology products designed to enhance your business, 
        educational, and security needs with innovative digital solutions.
      </p>
    </div>
    
    <div className="row g-4">
      {/* Interactive Screens */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="categories-item h-100">
          <div className="categories-item-inner h-100 d-flex flex-column">
            <div className="categories-img rounded-top" style={{height: "200px", overflow: "hidden"}}>
              <img 
                src={prod1} 
                className="img-fluid w-100 h-100 rounded-top" 
                alt="Interactive Screens" 
                style={{objectFit: "cover"}}
              />
            </div>
            <div className="categories-content rounded-bottom p-4 d-flex flex-column flex-grow-1">
              <h4>Interactive Screens</h4>
              <div className="categories-review mb-4">
                <div className="me-3">4.8 Rating</div>
                <div className="d-flex justify-content-center text-secondary">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">Premium Display</h4>
              </div>
              <div className="row gy-2 gx-0 text-center mb-4">
                <div className="col-6 border-end border-white">
                  <i className="fa fa-tv text-dark"></i> <span className="text-body ms-1">4K UHD</span>
                </div>
                <div className="col-6">
                  <i className="fa fa-hand-pointer text-dark"></i> <span className="text-body ms-1">Multi-touch</span>
                </div>
                <div className="col-6 border-end border-white">
                  <i className="fa fa-users text-dark"></i> <span className="text-body ms-1">Collaboration</span>
                </div>
                <div className="col-6">
                  <i className="fa fa-plug text-dark"></i> <span className="text-body ms-1">Easy Setup</span>
                </div>
              </div>
              <p className="mb-3 small">Transform classrooms and boardrooms with interactive touch screens for enhanced collaboration and engagement.</p>
              <Link to="#" className="btn btn-primary rounded-pill d-flex justify-content-center py-3 mt-auto">Get Quote</Link>
            </div>
          </div>
        </div>
      </div>

      {/* IP Surveillance Cameras */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
        <div className="categories-item h-100">
          <div className="categories-item-inner h-100 d-flex flex-column">
            <div className="categories-img rounded-top" style={{height: "200px", overflow: "hidden"}}>
              <img 
                src={prod2} 
                className="img-fluid w-100 h-100 rounded-top" 
                alt="IP Surveillance Cameras" 
                style={{objectFit: "cover"}}
              />
            </div>
            <div className="categories-content rounded-bottom p-4 d-flex flex-column flex-grow-1">
              <h4>IP Surveillance Cameras</h4>
              <div className="categories-review mb-4">
                <div className="me-3">4.9 Rating</div>
                <div className="d-flex justify-content-center text-secondary">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">Security Solution</h4>
              </div>
              <div className="row gy-2 gx-0 text-center mb-4">
                <div className="col-6 border-end border-white">
                  <i className="fa fa-eye text-dark"></i> <span className="text-body ms-1">1080p HD</span>
                </div>
                <div className="col-6">
                  <i className="fa fa-wifi text-dark"></i> <span className="text-body ms-1">Wireless</span>
                </div>
                <div className="col-6 border-end border-white">
                  <i className="fa fa-shield-alt text-dark"></i> <span className="text-body ms-1">Night Vision</span>
                </div>
                <div className="col-6">
                  <i className="fa fa-mobile text-dark"></i> <span className="text-body ms-1">Remote View</span>
                </div>
              </div>
              <p className="mb-3 small">Advanced IP cameras with remote monitoring, motion detection, and high-definition recording capabilities.</p>
              <Link to="#" className="btn btn-primary rounded-pill d-flex justify-content-center py-3 mt-auto">Get Quote</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Audio Systems */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="categories-item h-100">
          <div className="categories-item-inner h-100 d-flex flex-column">
            <div className="categories-img rounded-top" style={{height: "200px", overflow: "hidden"}}>
              <img 
                src={prod3} 
                className="img-fluid w-100 h-100 rounded-top" 
                alt="Audio Systems" 
                style={{objectFit: "cover"}}
              />
            </div>
            <div className="categories-content rounded-bottom p-4 d-flex flex-column flex-grow-1">
              <h4>Audio Systems</h4>
              <div className="categories-review mb-4">
                <div className="me-3">4.7 Rating</div>
                <div className="d-flex justify-content-center text-secondary">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">Sound Solution</h4>
              </div>
              <div className="row gy-2 gx-0 text-center mb-4">
                <div className="col-6 border-end border-white">
                  <i className="fa fa-volume-up text-dark"></i> <span className="text-body ms-1">Crystal Clear</span>
                </div>
                <div className="col-6">
                  <i className="fa fa-bluetooth text-dark"></i> <span className="text-body ms-1">Wireless</span>
                </div>
                <div className="col-6 border-end border-white">
                  <i className="fa fa-microphone text-dark"></i> <span className="text-body ms-1">Conference</span>
                </div>
                <div className="col-6">
                  <i className="fa fa-sliders-h text-dark"></i> <span className="text-body ms-1">Easy Control</span>
                </div>
              </div>
              <p className="mb-3 small">Professional audio systems for meetings, classrooms, presentations, and events with superior sound quality.</p>
              <Link to="#" className="btn btn-primary rounded-pill d-flex justify-content-center py-3 mt-auto">Get Quote</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Computer Labs Setup */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
        <div className="categories-item h-100">
          <div className="categories-item-inner h-100 d-flex flex-column">
            <div className="categories-img rounded-top" style={{height: "200px", overflow: "hidden"}}>
              <img 
                src={prod4} 
                className="img-fluid w-100 h-100 rounded-top" 
                alt="Computer Labs Setup" 
                style={{objectFit: "cover"}}
              />
            </div>
            <div className="categories-content rounded-bottom p-4 d-flex flex-column flex-grow-1">
              <h4>Computer Labs Setup</h4>
              <div className="categories-review mb-4">
                <div className="me-3">4.6 Rating</div>
                <div className="d-flex justify-content-center text-secondary">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">Complete Setup</h4>
              </div>
              <div className="row gy-2 gx-0 text-center mb-4">
                <div className="col-6 border-end border-white">
                  <i className="fa fa-desktop text-dark"></i> <span className="text-body ms-1">Workstations</span>
                </div>
                <div className="col-6">
                  <i className="fa fa-network-wired text-dark"></i> <span className="text-body ms-1">Networking</span>
                </div>
                <div className="col-6 border-end border-white">
                  <i className="fa fa-server text-dark"></i> <span className="text-body ms-1">Server Setup</span>
                </div>
                <div className="col-6">
                  <i className="fa fa-tools text-dark"></i> <span className="text-body ms-1">Maintenance</span>
                </div>
              </div>
              <p className="mb-3 small">Fully equipped computer labs with workstations, networking, and server setup for education and training.</p>
              <Link to="#" className="btn btn-primary rounded-pill d-flex justify-content-center py-3 mt-auto">Get Quote</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop Solutions */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="categories-item h-100">
          <div className="categories-item-inner h-100 d-flex flex-column">
            <div className="categories-img rounded-top" style={{height: "200px", overflow: "hidden"}}>
              <img 
                src={prod1} 
                className="img-fluid w-100 h-100 rounded-top" 
                alt="Laptop Solutions" 
                style={{objectFit: "cover"}}
              />
            </div>
            <div className="categories-content rounded-bottom p-4 d-flex flex-column flex-grow-1">
              <h4>Laptop Solutions</h4>
              <div className="categories-review mb-4">
                <div className="me-3">4.5 Rating</div>
                <div className="d-flex justify-content-center text-secondary">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">Portable Computing</h4>
              </div>
              <div className="row gy-2 gx-0 text-center mb-4">
                <div className="col-6 border-end border-white">
                  <i className="fa fa-laptop text-dark"></i> <span className="text-body ms-1">High Performance</span>
                </div>
                <div className="col-6">
                  <i className="fa fa-battery-full text-dark"></i> <span className="text-body ms-1">Long Battery</span>
                </div>
                <div className="col-6 border-end border-white">
                  <i className="fa fa-cog text-dark"></i> <span className="text-body ms-1">Custom Config</span>
                </div>
                <div className="col-6">
                  <i className="fa fa-shield-alt text-dark"></i> <span className="text-body ms-1">Security</span>
                </div>
              </div>
              <p className="mb-3 small">High-performance laptops for business, education, and personal use with custom configurations and security features.</p>
              <Link to="#" className="btn btn-primary rounded-pill d-flex justify-content-center py-3 mt-auto">Get Quote</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Software Solutions */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
        <div className="categories-item h-100">
          <div className="categories-item-inner h-100 d-flex flex-column">
            <div className="categories-img rounded-top" style={{height: "200px", overflow: "hidden"}}>
              <img 
                src={prod2} 
                className="img-fluid w-100 h-100 rounded-top" 
                alt="Software Solutions" 
                style={{objectFit: "cover"}}
              />
            </div>
            <div className="categories-content rounded-bottom p-4 d-flex flex-column flex-grow-1">
              <h4>Software Solutions</h4>
              <div className="categories-review mb-4">
                <div className="me-3">4.8 Rating</div>
                <div className="d-flex justify-content-center text-secondary">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">Custom Development</h4>
              </div>
              <div className="row gy-2 gx-0 text-center mb-4">
                <div className="col-6 border-end border-white">
                  <i className="fa fa-code text-dark"></i> <span className="text-body ms-1">Custom Apps</span>
                </div>
                <div className="col-6">
                  <i className="fa fa-cloud text-dark"></i> <span className="text-body ms-1">Cloud Solutions</span>
                </div>
                <div className="col-6 border-end border-white">
                  <i className="fa fa-cogs text-dark"></i> <span className="text-body ms-1">Integration</span>
                </div>
                <div className="col-6">
                  <i className="fa fa-sync text-dark"></i> <span className="text-body ms-1">Updates</span>
                </div>
              </div>
              <p className="mb-3 small">Custom software development, cloud solutions, and system integration tailored to your specific business needs.</p>
              <Link to="#" className="btn btn-primary rounded-pill d-flex justify-content-center py-3 mt-auto">Get Quote</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      {/* products start */}


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



    <div className="container-fluid contact py-5">
      <div className="container-fluid py-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
          <h1 className="display-5 text-capitalize text-primary mb-3">Contact Us</h1>
        </div>
        <div className="row g-5">
          {/* First Column - Contact Information */}
          <div className="col-xl-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="row g-5">
              <div className="col-md-6 col-lg-6">
                <div className="contact-add-item p-4">
                  <div className="contact-icon mb-4">
                    <i className="fas fa-map-marker-alt fa-2x"></i>
                  </div>
                  <div>
                    <h4>Address</h4>
                    <p className="mb-0">july 23 abrove al-tawhid ,al-nour , seventh floor- Bani-suef</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="contact-add-item p-4">
                  <div className="contact-icon mb-4">
                    <i className="fas fa-envelope fa-2x"></i>
                  </div>
                  <div>
                    <h4>Mail Us</h4>
                    <p className="mb-0">contact@outlookds.com</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="contact-add-item p-4">
                  <div className="contact-icon mb-4">
                    <i className="fa fa-phone-alt fa-2x"></i>
                  </div>
                  <div>
                    <h4>Telephone</h4>
                    <p className="mb-0">01205450008</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="contact-add-item p-4">
                  <div className="contact-icon mb-4">
                    <i className="fab fa-firefox-browser fa-2x"></i>
                  </div>
                  <div>
                    <h4>www.outlookds.com</h4>
                    <p className="mb-0">01205450008</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Column - Contact Form */}
          <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className=" p-5 rounded">
              <h4 className="text-primary mb-4">Send Your Message</h4>
              <form>
                <div className="row g-4">
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="tel" className="form-control" id="phone" placeholder="Phone" />
                      <label htmlFor="phone">Your Phone</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="project" placeholder="Project" />
                      <label htmlFor="project">Your Project</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '160px' }}></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-light w-100 py-3" type="button">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>


          {/* Full Width Map */}
          <div className="col-12 wow fadeInUp" data-wow-delay="0.5s">
            <div className="rounded">
              <iframe
                className="rounded w-100"
                style={{ height: '400px' }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>

}
