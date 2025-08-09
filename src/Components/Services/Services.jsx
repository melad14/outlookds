import React from 'react'
import { Link } from 'react-router-dom'

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

  </>

}
