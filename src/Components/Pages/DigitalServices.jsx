import React, { useEffect } from 'react'
import digitalImg1 from '../../img/WhatsApp Image 2025-07-27 at 16.25.16_38897408.jpg';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

export default function DigitalServices() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    
    return (
        <>
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Digital Services</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="">Services</Link></li>
                        <li className="breadcrumb-item active text-primary">Digital Solutions</li>
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
                                        <span className="text-primary">Smart Digital Systems</span> Development & 
                                        <span className="text-primary"> Creative Branding</span> Services
                                    </h1>
                                    <p className="mb-0">
                                        We offer integrated services including mobile app development, modern websites, 
                                        and visual branding to create impactful digital experiences.
                                    </p>
                                </div>

                                {/* Services Cards */}
                                <div className="row g-4">
                                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                                        <div className="about-item-inner border p-4">
                                            <h5 className="mb-3">Mobile App Development</h5>
                                            <p className="mb-0">Custom mobile solutions for iOS and Android platforms.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                                        <div className="about-item-inner border p-4">
                                            <h5 className="mb-3">Modern Web Development</h5>
                                            <p className="mb-0">Responsive, user-friendly websites with cutting-edge technologies.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12" data-aos="fade-up" data-aos-delay="500">
                                        <div className="about-item-inner border p-4">
                                            <h5 className="mb-3">Visual Branding</h5>
                                            <p className="mb-0">
                                                Complete branding packages including graphic design, promo videos, 
                                                photography, and editing.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Our Approach */}
                                <div className="row g-4 mt-2">
                                    <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                                        <div className="rounded">
                                            <h5 className="mb-3 text-primary">Our Philosophy</h5>
                                            <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> Focus on quality, simplicity, and professionalism</p>
                                            <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> No reliance on sponsored ads or outdated marketing</p>
                                            <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> Every idea deserves to become a unique digital experience</p>
                                            <p className="mb-0"><i className="fa fa-check-circle text-primary me-1"></i> Combining technology with creativity for impactful solutions</p>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="col-lg-5 d-flex align-items-center" data-aos="fade-up" data-aos-delay="700">
                                        <Link to="/" className="btn btn-primary rounded py-3 px-5">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Images */}
                        <div className="col-xl-6" data-aos="fade-left" data-aos-delay="200">
                            <div className="about-img">
                                <div className="img-1">
                                    <img
                                        src={digitalImg1}
                                        className="img-fluid rounded h-100 w-100"
                                        alt="Digital services showcase"
                                    />
                                </div>
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="container-fluid py-5 bg-light">
                <div className="container py-5">
                    <div className="text-center mb-5" data-aos="fade-up">
                        <h1 className="display-5 text-capitalize mb-4">
                            <span className="text-primary">Comprehensive</span> Digital Solutions
                        </h1>
                        <p className="mb-0">End-to-end services to elevate your digital presence</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="bg-white p-4 rounded shadow h-100">
                                <h5 className="mb-3">Web Development</h5>
                                <p className="mb-0">
                                    Custom websites built with modern frameworks for optimal performance, 
                                    security, and user experience across all devices.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="bg-white p-4 rounded shadow h-100">
                                <h5 className="mb-3">App Development</h5>
                                <p className="mb-0">
                                    Native and cross-platform mobile applications tailored to your business 
                                    needs with intuitive interfaces.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="bg-white p-4 rounded shadow h-100">
                                <h5 className="mb-3">Branding & Design</h5>
                                <p className="mb-0">
                                    Complete visual identity packages including logos, brand guidelines, 
                                    marketing materials, and promotional content.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                            <div className="bg-white p-4 rounded shadow h-100">
                                <h5 className="mb-3">Digital Marketing</h5>
                                <p className="mb-0">
                                    Strategic online campaigns focused on organic growth and meaningful engagement.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="500">
                            <div className="bg-white p-4 rounded shadow h-100">
                                <h5 className="mb-3">Content Creation</h5>
                                <p className="mb-0">
                                    High-quality photography, videography, and graphic design for all your 
                                    digital platforms.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                            <div className="bg-white p-4 rounded shadow h-100">
                                <h5 className="mb-3">UI/UX Design</h5>
                                <p className="mb-0">
                                    User-centered design approaches to create intuitive and engaging digital 
                                    experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}