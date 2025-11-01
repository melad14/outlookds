import React from 'react'
import { Link } from 'react-router-dom'
import prod1 from '../../img/extra/IMG-20251019-WA0021.jpg';
import prod2 from '../../img/extra/IMG-20251019-WA0022.jpg';
import prod3 from '../../img/extra/IMG-20251019-WA0023.jpg';
import prod4 from '../../img/extra/IMG-20251019-WA0024.jpg';
import blog1 from '../../img/extra/IMG-20251019-WA0025.jpg';
import blog2 from '../../img/extra/IMG-20251019-WA0026.jpg';
import blog3 from '../../img/extra/IMG-20251019-WA0027.jpg';
import banner1 from '../../img/extra/IMG-20251019-WA0048.jpg';

export default function Products() {
  return (
    <>
       <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Products</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="">Pages</Link></li>
                        <li className="breadcrumb-item active text-primary">Products</li>
                    </ol>    
                </div>
            </div>
    
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
    <div className="container-fluid blog py-5 my-5">
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

    </>
  )
}
