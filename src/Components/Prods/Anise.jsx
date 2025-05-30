import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../img/anise details.jpg"
import img2 from "../../img/anise details2.jpg"
export default function Anise() {
  return <>
   <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
          Anise
          </h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/products">Products</Link>
            </li>
            <li className="breadcrumb-item active text-primary">Anise</li>
          </ol>
        </div>
      </div>

      <div className="container py-5">
      <div className='mb-5'>
        <h2 className='text-primary'>
          Anise
        </h2>
     

      </div>

      <hr />
      <hr />
      <div className='container'>
        <div className="row">
            <div className="col-md-6">
                <img src={img} className='w-100 h-100' alt="" />
            </div>
            <div className="col-md-6">
                <img src={img2} className='w-100 h-100' alt="" />
            </div>
        </div>
      </div>
      <h2 className='text-primary my-3'>Description</h2>
<p>Anise is an annual herbaceous plant characterized by its small, aromatic seeds, which are
used in folk medicine to treat digestive disorders, such as bloating, cramps, and
indigestion. It contains anethole, which gives it its distinctive flavor and medicinal
properties. It is also used as a natural sedative, helping to improve sleep and calm the
nerves, in addition to its role in relieving the symptoms of colds and coughs. It can be
consumed as a warm drink or added to desserts and baked goods for a unique flavor.</p>


      <hr />
      <hr />
      <Link to="/contact" className="btn bg-primary text-light py-3 px-5">Get Offer</Link>

    </div>
  </>
}
