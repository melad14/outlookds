import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../img/Hibiscusss.jpg"
import img2 from "../../img/hibiscuss.jpg"
export default function Hibiscus() {
    return <>
        <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
                <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
                    Hibiscus

                </h4>
                <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/products">Products</Link>
                    </li>
                    <li className="breadcrumb-item active text-primary">Hibiscus
                    </li>
                </ol>
            </div>
        </div>

        <div className="container py-5">
            <div className='mb-5'>
                <h2 className='text-primary'>
                    Hibiscus

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
            <p>Hibiscus is a flowering plant characterized by its bright red flowers, which are used in
                preparing hot and cold drinks. It is known for its health benefits, as it helps lower blood
                pressure, improve heart health, and boost immunity thanks to its richness in antioxidants
                such as vitamin C.


            </p>


            <hr />
            <hr />
            <Link to="/contact" className="btn bg-primary text-light py-3 px-5">Get Offer</Link>

        </div>
    </>
}
