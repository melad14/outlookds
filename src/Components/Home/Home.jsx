import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import aboutIcon1 from '../../img/about-icon-1.png';
import aboutIcon2 from '../../img/about-icon-2.png';
import attachmentImg from '../../img/attachment-img.jpg';
import aboutImg from '../../img/about-img.jpg';
import aboutImg1 from '../../img/about-img-1.jpg';
import feat from "../../img/features-img.png"
import carsol2 from "../../img/carousel-2.jpg"
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function Home() {

  
  useEffect(() => {
    Aos.init({
        duration: 1000
    })

}, [])

  return<>
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



{/* Features Start */}
<div className="container-fluid feature py-5">
  <div className="container py-5">
    <div 
      className="text-center mx-auto pb-5" 
      data-aos="fade-up" 
      data-aos-delay="100" 
      style={{ maxWidth: "800px" }}
    >
      <h1 className="display-5 text-capitalize mb-3">Outlook ds <span className="text-primary">Features</span></h1>
      <p className="mb-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
      </p>
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
                <h5 className="mb-3">First Class services</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?</p>
              </div>
            </div>
          </div>
          <div className="col-12" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-item">
              <div className="feature-icon">
                <span className="fa fa-road fa-2x"></span>
              </div>
              <div className="ms-4">
                <h5 className="mb-3">24/7 road assistance</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?</p>
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
                <h5 className="mb-3">Quality at Minimum</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?</p>
              </div>
              <div className="feature-icon">
                <span className="fa fa-tag fa-2x"></span>
              </div>
            </div>
          </div>
          <div className="col-12" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-item justify-content-end">
              <div className="text-end me-4">
                <h5 className="mb-3">Free Pick-Up & Drop-Off</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?</p>
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

{/* About Start */}
<div className="container-fluid overflow-hidden about py-5">
  <div className="container py-5">
    <div className="row g-5">
      {/* Left Column - Content */}
      <div className="col-xl-6" data-aos="fade-right" data-aos-delay="200">
        <div className="about-item">
          <div className="pb-5">
            <h1 className="display-5 text-capitalize">Out look <span className="text-primary">About</span></h1>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
            </p>
          </div>
          
          {/* Vision & Mission Cards */}
          <div className="row g-4">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div className="about-item-inner border p-4">
                <div className="about-icon mb-4">
                  <img src={aboutIcon1} className="img-fluid w-50 h-50" alt="Vision Icon" />
                </div>
                <h5 className="mb-3">Our Vision</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="about-item-inner border p-4">
                <div className="about-icon mb-4">
                  <img src={aboutIcon2} className="img-fluid h-50 w-50" alt="Mission Icon" />
                </div>
                <h5 className="mb-3">Our Mission</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>

          <p className="text-item my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, aliquam ipsum. Sed suscipit dolorem libero sequi aut natus debitis reprehenderit facilis quaerat similique, est at in eum. Quo, obcaecati in!
          </p>

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
                <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> Morbi tristique senectus</p>
                <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> A scelerisque purus</p>
                <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> Dictumst vestibulum</p>
                <p className="mb-0"><i className="fa fa-check-circle text-primary me-1"></i> dio aenean sed adipiscing</p>
              </div>
            </div>
            
            {/* CTA & Founder */}
            <div className="col-lg-5 d-flex align-items-center" data-aos="fade-up" data-aos-delay="500">
              <a href="#" className="btn btn-primary rounded py-3 px-5">More About Us</a>
            </div>
            <div className="col-lg-7" data-aos="fade-up" data-aos-delay="600">
              <div className="d-flex align-items-center">
                <img 
                  src={attachmentImg} 
                  className="img-fluid rounded-circle border border-4 border-secondary" 
                  style={{ width: "100px", height: "100px" }} 
                  alt="Founder" 
                />
                <div className="ms-4">
                  <h4>Sameh</h4>
                  <p className="mb-0">Carveo Founder</p>
                </div>
              </div>
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
                <span className="text-white fs-2 fw-bold" data-toggle="counter-up">56</span>
                <span className="h1 fw-bold text-white">+</span>
              </div>
              <h4 className="text-white mb-0">Number of Cars</h4>
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
              <h4 className="text-white mb-0">Car Center</h4>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
            <div className="counter-item text-center">
              <div className="counter-item-icon mx-auto">
                <i className="fas fa-clock fa-2x"></i>
              </div>
              <div className="counter-counting my-3">
                <span className="text-white fs-2 fw-bold" data-toggle="counter-up">589</span>
                <span className="h1 fw-bold text-white">+</span>
              </div>
              <h4 className="text-white mb-0">Total kilometers</h4>
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
          <h1 className="display-5 text-capitalize mb-3">Out look <span className="text-primary">Services</span></h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
          </p>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item p-4">
              <div className="service-icon mb-4">
                <i className="fa fa-phone-alt fa-2x"></i>
              </div>
              <h5 className="mb-3">Phone Reservation</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item p-4">
              <div className="service-icon mb-4">
                <i className="fa fa-money-bill-alt fa-2x"></i>
              </div>
              <h5 className="mb-3">Special Rates</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item p-4">
              <div className="service-icon mb-4">
                <i className="fa fa-road fa-2x"></i>
              </div>
              <h5 className="mb-3">One Way Rental</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item p-4">
              <div className="service-icon mb-4">
                <i className="fa fa-umbrella fa-2x"></i>
              </div>
              <h5 className="mb-3">Life Insurance</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item p-4">
              <div className="service-icon mb-4">
                <i className="fa fa-building fa-2x"></i>
              </div>
              <h5 className="mb-3">City to City</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item p-4">
              <div className="service-icon mb-4">
                <i className="fa fa-car-alt fa-2x"></i>
              </div>
              <h5 className="mb-3">Free Rides</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* servces end */}

    {/* contact start */}
    <div className="container-fluid contact py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
          <h1 className="display-5 text-capitalize text-primary mb-3">Contact Us</h1>
          
        </div>
        <div className="row g-5">
          <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
            <div className="row g-5">
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="contact-add-item p-4">
                  <div className="contact-icon mb-4">
                    <i className="fas fa-map-marker-alt fa-2x"></i>
                  </div>
                  <div>
                    <h4>Address</h4>
                    <p className="mb-0">123 Street New York.USA</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                <div className="contact-add-item p-4">
                  <div className="contact-icon mb-4">
                    <i className="fas fa-envelope fa-2x"></i>
                  </div>
                  <div>
                    <h4>Mail Us</h4>
                    <p className="mb-0">info@example.com</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                <div className="contact-add-item p-4">
                  <div className="contact-icon mb-4">
                    <i className="fa fa-phone-alt fa-2x"></i>
                  </div>
                  <div>
                    <h4>Telephone</h4>
                    <p className="mb-0">(+012) 3456 7890</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                <div className="contact-add-item p-4">
                  <div className="contact-icon mb-4">
                    <i className="fab fa-firefox-browser fa-2x"></i>
                  </div>
                  <div>
                    <h4>Yoursite@ex.com</h4>
                    <p className="mb-0">(+012) 3456 7890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
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
          
          <div className="col-12 col-xl-1 wow fadeInUp" data-wow-delay="0.3s">
            <div className="d-flex flex-xl-column align-items-center justify-content-center">
              <a className="btn btn-xl-square btn-light rounded-circle mb-0 mb-xl-4 me-4 me-xl-0" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-xl-square btn-light rounded-circle mb-0 mb-xl-4 me-4 me-xl-0" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-xl-square btn-light rounded-circle mb-0 mb-xl-4 me-4 me-xl-0" href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="btn btn-xl-square btn-light rounded-circle mb-0 mb-xl-0 me-0 me-xl-0" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div className="col-12 col-xl-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="p-5 bg-light rounded">
              <div className="bg-white rounded p-4 mb-4">
                <h4 className="mb-3">Our Branch 01</h4>
                <div className="d-flex align-items-center flex-shrink-0 mb-3">
                  <p className="mb-0 text-dark me-2">Address:</p>
                  <i className="fas fa-map-marker-alt text-primary me-2"></i>
                  <p className="mb-0">123 Street New York.USA</p>
                </div>
                <div className="d-flex align-items-center">
                  <p className="mb-0 text-dark me-2">Telephone:</p>
                  <i className="fa fa-phone-alt text-primary me-2"></i>
                  <p className="mb-0">(+012) 3456 7890</p>
                </div>
              </div>
              <div className="bg-white rounded p-4 mb-4">
                <h4 className="mb-3">Our Branch 02</h4>
                <div className="d-flex align-items-center mb-3">
                  <p className="mb-0 text-dark me-2">Address:</p>
                  <i className="fas fa-map-marker-alt text-primary me-2"></i>
                  <p className="mb-0">123 Street New York.USA</p>
                </div>
                <div className="d-flex align-items-center">
                  <p className="mb-0 text-dark me-2">Telephone:</p>
                  <i className="fa fa-phone-alt text-primary me-2"></i>
                  <p className="mb-0">(+012) 3456 7890</p>
                </div>
              </div>
              <div className="bg-white rounded p-4 mb-0">
                <h4 className="mb-3">Our Branch 03</h4>
                <div className="d-flex align-items-center mb-3">
                  <p className="mb-0 text-dark me-2">Address:</p>
                  <i className="fas fa-map-marker-alt text-primary me-2"></i>
                  <p className="mb-0">123 Street New York.USA</p>
                </div>
                <div className="d-flex align-items-center">
                  <p className="mb-0 text-dark me-2">Telephone:</p>
                  <i className="fa fa-phone-alt text-primary me-2"></i>
                  <p className="mb-0">(+012) 3456 7890</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-12">
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
    {/* contact end */}

  </>
 
}
