import React from 'react'
import { Link } from 'react-router-dom'
import feat from "../../img/features-img.png"

export default function Services() {
  return <>
     <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Services</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="">Pages</Link></li>
                        <li className="breadcrumb-item active text-primary">Services</li>
                    </ol>    
                </div>
            </div>


    {/* servces start */}

    {/* servces start */}

   <div className="container-fluid service py-5">
      <div className="container-fluid py-5">
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
    {/* servces end */}

  </>

}
