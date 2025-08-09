import React, { useEffect } from 'react'
import ledImg2 from '../../img/IMG-20250804-WA0003.jpg';
import ledImg1 from '../../img/why.jpg';

import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

export default function LedScreens() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    
    return (
        <>
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">LED Screen Solutions</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="">Services</Link></li>
                        <li className="breadcrumb-item active text-primary">LED Screens</li>
                    </ol>    
                </div>
            </div>

            <div className="container-fluid overflow-hidden about py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        {/* Left Column - Content */}
                        <div className="col-xl-6" data-aos="fade-right" data-aos-delay="200">
                            <div className="about-item">
                                <div className="pb-5">
                                    <h1 className="display-5 text-capitalize"> 
                                        <span className="text-primary">Design & Installation</span> of Indoor/Outdoor LED Screens
                                    </h1>
                                    <p className="mb-0">
                                        Whether for advertising, events, or professional presentations, our LED display 
                                        solutions combine cutting-edge technology with durability and clarity to create 
                                        stunning visual impact anytime, anywhere.
                                    </p>
                                </div>

                                {/* Features Cards */}
                                <div className="row g-4">
                                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                                        <div className="about-item-inner border p-4">
                                            
                                            <h5 className="mb-3">High Brightness & Visibility</h5>
                                            <p className="mb-0">Perfect for both indoor and outdoor environments, even in direct sunlight.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                                        <div className="about-item-inner border p-4">
                                            
                                            <h5 className="mb-3">Modular Design</h5>
                                            <p className="mb-0">Flexible sizing options to suit any location or creative vision.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="500">
                                        <div className="about-item-inner border p-4">
                                         
                                            <h5 className="mb-3">Energy Efficient & Durable</h5>
                                            <p className="mb-0">Built to last with minimal power consumption.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="600">
                                        <div className="about-item-inner border p-4">
                                            <div className="about-icon mb-4">
                                                <i className="fas fa-tools fa-3x text-primary"></i>
                                            </div>
                                            <h5 className="mb-3">Seamless Installation</h5>
                                            <p className="mb-0">Fast setup and reliable long-term performance.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Benefits */}
                                <div className="row g-4 mt-2">
                                    <div className="col-12" data-aos="fade-up" data-aos-delay="700">
                                        <div className="rounded">
                                            <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> Custom configurations for any space requirements</p>
                                            <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> Professional content management solutions</p>
                                            <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> Weather-resistant outdoor solutions</p>
                                            <p className="mb-0"><i className="fa fa-check-circle text-primary me-1"></i> Ongoing maintenance and support</p>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="col-lg-5 d-flex align-items-center" data-aos="fade-up" data-aos-delay="800">
                                       <Link to="/contact" className="btn btn-primary rounded py-3 px-5">Get a Free Quote</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Images */}
                        <div className="col-xl-6" data-aos="fade-left" data-aos-delay="200">
                            <div className="about-img">
                                <div className="img-1">
                                    <img
                                        src={ledImg1}
                                        className="img-fluid rounded h-100 w-100"
                                        alt="LED screen installation"
                                    />
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Applications Section */}
            <div className="container-fluid py-5 bg-light">
                <div className="container py-5">
                    <div className="text-center mb-5" data-aos="fade-up">
                        <h1 className="display-5 text-capitalize mb-4">
                            <span className="text-primary">Versatile Applications</span> Across Industries
                        </h1>
                        <p className="mb-0">From retail spaces and events to corporate lobbies and public venues</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="bg-white p-4 rounded shadow h-100">
                                <h5 className="mb-3">Retail & Advertising</h5>
                                <p className="mb-0">
                                    Captivate customers with dynamic digital signage and promotional displays.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="bg-white p-4 rounded shadow h-100">
                                <h5 className="mb-3">Corporate Environments</h5>
                                <p className="mb-0">
                                    Impress clients with lobby displays, conference room solutions, and digital wayfinding.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="bg-white p-4 rounded shadow h-100">
                                <h5 className="mb-3">Events & Exhibitions</h5>
                                <p className="mb-0">
                                    Create immersive experiences for trade shows, concerts, and special events.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                            <div className="bg-white p-4 rounded shadow h-100">
                                <h5 className="mb-3">Sports Venues</h5>
                                <p className="mb-0">
                                    Engage fans with scoreboards, replays, and interactive displays.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="500">
                            <div className="bg-white p-4 rounded shadow h-100">
                                <h5 className="mb-3">Transportation Hubs</h5>
                                <p className="mb-0">
                                    Provide clear information displays in airports, train stations, and bus terminals.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                            <div className="bg-white p-4 rounded shadow h-100">
                                <h5 className="mb-3">Worship & Education</h5>
                                <p className="mb-0">
                                    Enhance services and learning with high-quality visual displays.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technical Specifications Section */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-2" data-aos="fade-left">
                            <img src={ledImg2} className="img-fluid rounded" alt="LED screen specifications" />
                        </div>
                        <div className="col-lg-6 order-lg-1" data-aos="fade-right">
                            <h2 className="display-6 mb-4">
                                <span className="text-primary">Technical</span> Specifications
                            </h2>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="bg-light p-3 rounded">
                                        <h6 className="text-primary">Pixel Pitch</h6>
                                        <p className="mb-0">From P1.2 to P10mm options</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="bg-light p-3 rounded">
                                        <h6 className="text-primary">Brightness</h6>
                                        <p className="mb-0">Up to 8000 nits (outdoor)</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="bg-light p-3 rounded">
                                        <h6 className="text-primary">Viewing Angle</h6>
                                        <p className="mb-0">140°-160° horizontal/vertical</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="bg-light p-3 rounded">
                                        <h6 className="text-primary">Refresh Rate</h6>
                                        <p className="mb-0">3840Hz+ for smooth video</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="bg-light p-3 rounded">
                                        <h6 className="text-primary">IP Rating</h6>
                                        <p className="mb-0">Up to IP65 for outdoor use</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="bg-light p-3 rounded">
                                        <h6 className="text-primary">Lifespan</h6>
                                        <p className="mb-0">100,000+ hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}