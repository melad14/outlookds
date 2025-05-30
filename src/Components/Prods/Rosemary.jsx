import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../img/ros1.jpg"
import img2 from "../../img/ros2.jpg"
export default function Rosemary() {
    return <>
        <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
                <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
                    Rosemary

                </h4>
                <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/products">Products</Link>
                    </li>
                    <li className="breadcrumb-item active text-primary">Rosemary
                    </li>
                </ol>
            </div>
        </div>

        <div className="container py-5">
            <div className='mb-5'>
                <h2 className='text-primary'>
                    Rosemary

                </h2>


            </div>

            <hr />
            <hr />
            <div className='container'>
                <div className="row">
                    <div className="col-md-6">
                        <img src={img} className='w-100 ' alt="" />
                    </div>
                    <div className="col-md-6">
                        <img src={img2} className='w-100 ' alt="" />
                    </div>
                </div>
            </div>
            <h2 className='text-primary my-3'>Description</h2>
            <p>Rosemary is an aromatic evergreen plant characterized by its needle-like leaves and strong
                aroma. It is used in cooking and is known for its many health benefits. It helps improve
                memory and concentration, and promotes nervous system health, thanks to its antioxidant
                and active compounds such as rosmarinic acid. It also has anti-inflammatory and
                antibacterial properties, and supports digestive and heart health. It can be used fresh or
                dried in foods, or made into an herbal tea to benefit from its benefits.


            </p>


            <hr />
            <hr />
            <Link to="/contact" className="btn bg-primary text-light py-3 px-5">Get Offer</Link>

        </div>
    </>
}
