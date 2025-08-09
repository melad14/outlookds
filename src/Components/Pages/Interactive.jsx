import React, { useEffect } from 'react'
import interactiveImg1 from '../../img/IMG-20250804-WA0003.jpg';

import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

export default function Interactive() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    
    return (
        <>
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Interactive Panels</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="">Products</Link></li>
                        <li className="breadcrumb-item active text-primary">Interactive Panels</li>
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
                                    <h1 className="display-5 text-capitalize"> <span className="text-primary">Interactive Panels</span></h1>
                                    <p className="mb-0">
                                        Our interactive panels are designed to transform the way businesses 
                                        and educational institutions engage with technology.
                                    </p>
                                </div>

                                {/* Features Cards */}
                                <div className="row g-4">
                                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                                        <div className="about-item-inner border p-4">
                                           
                                            <h5 className="mb-3">High-Resolution Displays</h5>
                                            <p className="mb-0">Crisp visuals for presentations and collaborations.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                                        <div className="about-item-inner border p-4">
                                           
                                            <h5 className="mb-3">Touchscreen Functionality</h5>
                                            <p className="mb-0">Intuitive interaction for seamless user experiences.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12" data-aos="fade-up" data-aos-delay="500">
                                        <div className="about-item-inner border p-4">
                                           
                                            <h5 className="mb-3">Collaboration Tools</h5>
                                            <p className="mb-0">
                                                Used in modern classrooms or meeting rooms to encourage 
                                                interaction and creativity.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Features */}
                                <div className="row g-4 mt-2">
                                    <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                                        <div className="rounded">
                                            <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> Multi-touch capability for multiple users</p>
                                            <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> Built-in annotation tools</p>
                                            <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> Wireless screen sharing</p>
                                            <p className="mb-0"><i className="fa fa-check-circle text-primary me-1"></i> Compatibility with various operating systems</p>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="col-lg-5 d-flex align-items-center" data-aos="fade-up" data-aos-delay="700">
                                        <Link to="contact" className="btn btn-primary rounded py-3 px-5">Request a Demo</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Images */}
                        <div className="col-xl-6" data-aos="fade-left" data-aos-delay="200">
                            <div className="about-img">
                                <div className="img-1">
                                    <img
                                        src={interactiveImg1}
                                        className="img-fluid rounded h-100 w-100"
                                        alt="Interactive panel in classroom"
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
                            <span className="text-primary">Applications</span> of Our Interactive Panels
                        </h1>
                        <p className="mb-0">Discover how our interactive panels can transform your workspace or classroom</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="bg-white p-4 rounded shadow h-100">
                                <h5 className="mb-3">Education</h5>
                                <p className="mb-0">
                                    Enhance learning experiences in classrooms with interactive lessons, 
                                    collaborative activities, and engaging multimedia content.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="bg-white p-4 rounded shadow h-100">
                                <h5 className="mb-3">Corporate</h5>
                                <p className="mb-0">
                                    Revolutionize meetings and presentations with seamless collaboration, 
                                    real-time annotations, and wireless connectivity.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="bg-white p-4 rounded shadow h-100">
                                <h5 className="mb-3">Healthcare</h5>
                                <p className="mb-0">
                                    Improve patient education and staff training with interactive 
                                    displays that simplify complex medical information.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}