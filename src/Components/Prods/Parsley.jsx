import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../img/paras.jpg"
import img2 from "../../img/Parsley-from-Seed-Feature.jpg"
export default function Parsley() {
    return <>
        <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
                <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
                    Parsley

                </h4>
                <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/products">Products</Link>
                    </li>
                    <li className="breadcrumb-item active text-primary">Parsley
                    </li>
                </ol>
            </div>
        </div>

        <div className="container py-5">
            <div className='mb-5'>
                <h2 className='text-primary'>
                    Parsley

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
            <p>Parsley is a herbaceous plant widely used in cooking and herbal medicine. Its green leaves
                are rich in antioxidants and vitamins, such as vitamin C and vitamin K. It helps improve
                digestion, promotes urination, and cleanses the kidneys of toxins. It is also known for its
                anti-inflammatory properties and its role in promoting heart health and strengthening
                immunity. It can be used fresh in salads and various dishes, or consumed as a decoction to
                reap its health benefits.


            </p>


            <hr />
            <hr />
            <Link to="/contact" className="btn bg-primary text-light py-3 px-5">Get Offer</Link>

        </div>
    </>
}
