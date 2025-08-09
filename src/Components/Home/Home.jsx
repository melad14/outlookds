import React, { useEffect } from 'react'
import aboutIcon1 from '../../img/about-icon-1.png';
import aboutIcon2 from '../../img/about-icon-2.png';
import aboutImg from '../../img/about-img.jpg';
import aboutImg1 from '../../img/about-img-1.jpg';
import feat from "../../img/features-img.png"
import carsol2 from "../../img/home.jpg"
import why from '../../img/why.jpg';

import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
export default function Home() {


  useEffect(() => {
    Aos.init({
      duration: 1000
    })

  }, [])

  return <>
    <div className="header-carousel">
      <div
        id="carouselId"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="false"
      >


        {/* Carousel Items */}
        <div className="carousel-inner" role="listbox">
          {/* First Slide */}
          <div className="carousel-item active">
            <img
              src={carsol2}
              className="img-fluid w-100"
              alt="First slide"
            />
            <div className="carousel-caption">
              <div className="container py-4">
                <div className="row g-5">
                  {/* Form Column */}


                  {/* Promo Text Column */}
                  <div
                    className="col-lg-6 d-none d-lg-flex "
                    data-aos="fade-left" data-aos-delay="2000"
                  >

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Slide */}

        </div>
      </div>
    </div>




    {/* About Start */}
    <div className="container-fluid overflow-hidden about py-5">
      <div className="container py-5">
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
                    <h5 className="mb-3">Our Vision</h5>
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
                  <div className="text-center rounded bg-secondary p-4">
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
          <div className="col-xl-6" data-aos="fade-left" data-aos-delay="200">
            <div className="about-img">
              <div className="img-1">
                <img
                  src={aboutImg}
                  className="img-fluid rounded h-100 w-100"
                  alt="About us"
                />
              </div>
              <div className="img-2" data-aos="fade-up" data-aos-delay="400">
                <img
                  src={aboutImg1}
                  className="img-fluid rounded w-100"
                  alt="About us secondary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    {/* Why Choose Us Section */}
    <div className="container-fluid py-5 bg-light">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="mb-4">
              <h1 className="display-5 text-capitalize mb-4">
                <span className="text-primary">Why Choose</span> Us?
              </h1>
            </div>
            <div className="row g-4">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="bg-white p-4 rounded shadow">
                  <h5 className="mb-3">Expertise</h5>
                  <p className="mb-0">
                    A team of experienced professionals dedicated to providing top-notch solutions.
                  </p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-white p-4 rounded shadow">
                  <h5 className="mb-3">Customer-Centric Approach</h5>
                  <p className="mb-0">
                    We prioritize our clients' needs and work closely to deliver customized solutions.
                  </p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="bg-white p-4 rounded shadow">
                  <h5 className="mb-3">Innovation</h5>
                  <p className="mb-0">
                    Constantly exploring the latest technologies to provide cutting-edge products.
                  </p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div className="bg-white p-4 rounded shadow">
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


    {/* Features Start */}
    <div className="container-fluid feature py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5"
          data-aos="fade-up"
          data-aos-delay="100"
          style={{ maxWidth: "800px" }}
        >
          <h1 className="display-5 text-capitalize mb-3">Outlook ds <span className="text-primary">CORE VALUES
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

    {/* fact start */}

    <div className="container-fluid counter bg-secondary py-5">
      <div className="container py-5">
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

    {/* servces start */}

    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
          <h1 className="display-5 text-capitalize mb-3">Outlook <span className="text-primary">Services</span></h1>
          <p className="mb-0">
            We strive to provide top-notch service.          </p>
        </div>
        <div className="row g-4">
          {/* Service Item 1 */}
          <div className="col-md-6 col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item h-100 p-4 d-flex flex-column">
              <div className="service-icon mb-4 text-center">
                <i className="fa fa-phone-alt fa-2x"></i>
              </div>
              <h5 className="mb-3 text-center flex-grow-1">INTERACTIVE PANELS</h5>
              <p className="mb-0 text-center">
                Our interactive panels are designed to transform
                the way businesses and educational institutions
                engage with technology
              </p>
                       <Link className="btn btn-primary w-100 my-3" to="/interactive">    see more</Link>
            </div>
          </div>

          {/* Service Item 2 */}
          <div className="col-md-6 col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item h-100 p-4 d-flex flex-column">
              <div className="service-icon mb-4 text-center">
                <i className="fa fa-money-bill-alt fa-2x"></i>
              </div>
              <h5 className="mb-3 text-center flex-grow-1">
                SMART DIGITAL SYSTEMS DEVELOPMENT & CREATIVE BRANDING SERVICES
              </h5>
              <p className="mb-0 text-center">
                At Outlook Digital Solutions, we believe every idea
                deserves to become a unique digital experience —
                because when technology meets creativity, the result is
                impactful solutions.
              </p>
                       <Link className="btn btn-primary w-100 my-3" to="/DigitalServices">    see more</Link>

            </div>
          </div>

          {/* Service Item 3 */}
          <div className="col-md-6 col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item h-100 p-4 d-flex flex-column">
              <div className="service-icon mb-4 text-center">
                <i className="fa fa-road fa-2x"></i>
              </div>
              <h5 className="mb-3 text-center flex-grow-1">INTEGRATED AUDIO SYSTEMS</h5>
              <p className="mb-0 text-center">
                Our goal is to provide high-quality audio
                systems for both indoor and outdoor use
              </p>
                       <Link className="btn btn-primary w-100 my-3" to="/AudioSystems">    see more</Link>

            </div>
          </div>

          {/* Service Item 4 */}
          <div className="col-md-6 col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item h-100 p-4 d-flex flex-column">
              <div className="service-icon mb-4 text-center">
                <i className="fa fa-umbrella fa-2x"></i>
              </div>
              <h5 className="mb-3 text-center flex-grow-1">DESIGN AND INSTALLATION
                OF INDOOR AND OUTDOOR LED SCREENS</h5>
              <p className="mb-0 text-center">
                Our LED screens are designed to create a stunning visual
                impact anytime, anywhere.
              </p>
                       <Link className="btn btn-primary w-100 my-3" to="/LedScreens">    see more</Link>

            </div>
          </div>
        </div>
      </div>
    </div>
    {/* servces end */}

    <div className="container-fluid contact py-5">
      <div className="container py-5">
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
            <div className="bg-secondary p-5 rounded">
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
