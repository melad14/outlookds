import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../img/calendula details.jpg"
import img2 from "../../img/Calendula.jpg"
export default function Calendula() {
  return <>
  <div className="container-fluid bg-breadcrumb">
       <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
         <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
         Calendula
         </h4>
         <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
           <li className="breadcrumb-item">
             <Link to="/">Home</Link>
           </li>
           <li className="breadcrumb-item">
             <Link to="/products">Products</Link>
           </li>
           <li className="breadcrumb-item active text-primary">Calendula</li>
         </ol>
       </div>
     </div>

     <div className="container py-5">
     <div className='mb-5'>
       <h2 className='text-primary'>
         Calendula
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
<p>Calendula, or calendula, is a flowering plant used in traditional medicine for its therapeutic
benefits. Its orange or yellow flowers contain antioxidant and anti-inflammatory
compounds, making it useful in treating wounds, soothing skin irritations, and promoting
healthy skin. It is also used in cosmetics and herbal remedies for its soothing and
antiseptic properties. It can be consumed as an herbal tea, or its oil and extracts can be
used for skin care and wound healing.</p>


     <hr />
     <hr />
     <Link to="/contact" className="btn bg-primary text-light py-3 px-5">Get Offer</Link>

   </div>
 </>
}
