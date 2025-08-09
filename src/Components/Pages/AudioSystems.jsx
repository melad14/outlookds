import React, { useEffect } from 'react'
import audioImg1 from '../../img/IMG-20250804-WA0009.jpg';
import audioImg2 from '../../img/IMG-20250804-WA0011.jpg';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

export default function AudioSystems() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    
    return (
        <>
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Integrated Audio Systems</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="">Products</Link></li>
                        <li className="breadcrumb-item active text-primary">Audio Systems</li>
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
                                        <span className="text-primary">Integrated Audio</span> Systems
                                    </h1>
                                    <p className="mb-0">
                                        Comprehensive audio solutions that meet the needs of different spaces, 
                                        both indoor and outdoor, delivering complete coverage and crystal-clear sound quality.
                                    </p>
                                </div>

                                {/* Features Cards */}
                                <div className="row g-4">
                                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                                        <div className="about-item-inner border p-4">
                                            <h5 className="mb-3">Versatile Solutions</h5>
                                            <p className="mb-0">Suitable for all types of spaces, from large auditoriums to small indoor areas.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                                        <div className="about-item-inner border p-4">
                                            <h5 className="mb-3">Premium Sound Quality</h5>
                                            <p className="mb-0">Engineered for complete coverage and exceptional clarity.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12" data-aos="fade-up" data-aos-delay="500">
                                        <div className="about-item-inner border p-4">
                                            <h5 className="mb-3">Expert Support</h5>
                                            <p className="mb-0">
                                                Continuous technical support from our team of audio system specialists.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Key Benefits */}
                                <div className="row g-4 mt-2">
                                    <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                                        <div className="rounded">
                                            <h5 className="mb-3 text-primary">Our Audio Solutions Deliver</h5>
                                            <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> High-quality audio for both indoor and outdoor use</p>
                                            <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> Custom configurations for any space requirements</p>
                                            <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> Reliable performance for critical applications</p>
                                            <p className="mb-0"><i className="fa fa-check-circle text-primary me-1"></i> Seamless integration with existing systems</p>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="col-lg-5 d-flex align-items-center" data-aos="fade-up" data-aos-delay="700">
                                        <Link to="/contact" className="btn btn-primary rounded py-3 px-5">Request Consultation</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Images */}
                        <div className="col-xl-6" data-aos="fade-left" data-aos-delay="200">
                            <div className="about-img">
                                <div className="img-1">
                                    <img
                                        src={audioImg1}
                                        className="img-fluid rounded h-100 w-100"
                                        alt="Professional audio installation"
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
                            <span className="text-primary">Applications</span> For Every Environment
                        </h1>
                        <p className="mb-0">Tailored audio solutions for diverse settings and requirements</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="bg-white p-4 rounded shadow h-100">
                                <h5 className="mb-3">Corporate Spaces</h5>
                                <p className="mb-0">
                                    Conference rooms, boardrooms, and office environments with clear voice 
                                    reproduction and seamless connectivity.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="bg-white p-4 rounded shadow h-100">
                                <h5 className="mb-3">Educational Facilities</h5>
                                <p className="mb-0">
                                    Lecture halls, classrooms, and campus-wide systems designed for 
                                    intelligible speech and multimedia support.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="bg-white p-4 rounded shadow h-100">
                                <h5 className="mb-3">Worship Centers</h5>
                                <p className="mb-0">
                                    Houses of worship with balanced acoustics and distributed sound 
                                    for congregations of all sizes.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                            <div className="bg-white p-4 rounded shadow h-100">
                                <h5 className="mb-3">Entertainment Venues</h5>
                                <p className="mb-0">
                                    Theaters, clubs, and performance spaces with powerful, 
                                    high-fidelity sound systems.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="500">
                            <div className="bg-white p-4 rounded shadow h-100">
                                <h5 className="mb-3">Hospitality</h5>
                                <p className="mb-0">
                                    Hotels, restaurants, and resorts with background music and 
                                    public address systems.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                            <div className="bg-white p-4 rounded shadow h-100">
                                <h5 className="mb-3">Outdoor Spaces</h5>
                                <p className="mb-0">
                                    Parks, stadiums, and outdoor venues with weather-resistant 
                                    audio solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technical Support Section */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right">
                            <img src={audioImg2} className="img-fluid rounded" alt="Technical support team" />
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <h2 className="display-6 mb-4">
                                <span className="text-primary">Expert Technical</span> Support
                            </h2>
                            <p className="mb-4">
                                Our team of audio specialists provides ongoing support, maintenance, 
                                and system optimization to ensure your audio systems perform at their best.
                            </p>
                            <ul className="list-unstyled">
                                <li className="mb-2"><i className="fa fa-check text-primary me-2"></i> System design and installation</li>
                                <li className="mb-2"><i className="fa fa-check text-primary me-2"></i> Regular maintenance programs</li>
                                <li className="mb-2"><i className="fa fa-check text-primary me-2"></i> Troubleshooting and repairs</li>
                                <li className="mb-2"><i className="fa fa-check text-primary me-2"></i> System upgrades and expansions</li>
                                <li className="mb-0"><i className="fa fa-check text-primary me-2"></i> 24/7 emergency support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}