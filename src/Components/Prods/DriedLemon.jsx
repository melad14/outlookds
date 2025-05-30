import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../img/Dried lemon.jpg"
import img2 from "../../img/Dried lemon.jpg"
export default function DriedLemon() {
    return <>
        <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
                <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
                    Dried Lemon

                </h4>
                <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/products">Products</Link>
                    </li>
                    <li className="breadcrumb-item active text-primary">Dried Lemon
                    </li>
                </ol>
            </div>
        </div>

        <div className="container py-5">
            <div className='mb-5'>
                <h2 className='text-primary'>
                    Dried Lemon

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
            <p>Dried lemon, also known as loomi, is a fresh lemon that is dried and used as a spice in
                cooking and beverages. It has a strong citrus flavor and distinctive aroma and is used in
                Middle Eastern cuisine, particularly for seasoning meats and adding a rich flavor to soups
                and stews. It is high in vitamin C and antioxidants, making it beneficial for boosting
                immunity, improving digestive health, and detoxifying the body
            </p>


            <hr />
            <hr />
            <Link to="/contact" className="btn bg-primary text-light py-3 px-5">Get Offer</Link>

        </div>
    </>
}
