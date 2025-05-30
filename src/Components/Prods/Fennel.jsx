import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../img/Fennel-©KateePederson-2-scaled.jpg"
import img2 from "../../img/Fennel.jpg"
export default function Fennel() {
    return <>
        <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
                <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
                    Fennel

                </h4>
                <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/products">Products</Link>
                    </li>
                    <li className="breadcrumb-item active text-primary">Fennel
                    </li>
                </ol>
            </div>
        </div>

        <div className="container py-5">
            <div className='mb-5'>
                <h2 className='text-primary'>
                    Fennel

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
            <p>Fennel is an aromatic plant characterized by its aromatic seeds, leaves, and stems. It is
                used in folk medicine and cooking. It contains active compounds such as anethole, which
                help improve digestion, relieve bloating and cramps, and soothe the digestive system. It is
                also known for its milk-promoting properties in breastfeeding mothers and its effectiveness
                in supporting respiratory health and strengthening immunity. It can be consumed as a
                warm drink or added to foods to add a distinctive flavor.

            </p>


            <hr />
            <hr />
            <Link to="/contact" className="btn bg-primary text-light py-3 px-5">Get Offer</Link>

        </div>
    </>
}
