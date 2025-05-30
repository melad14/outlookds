import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../img/Coriander details.jpg"
import img2 from "../../img/Coriander det.jpg"
export default function Coriander() {
  return <>
  <div className="container-fluid bg-breadcrumb">
       <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
         <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
         Coriander
         </h4>
         <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
           <li className="breadcrumb-item">
             <Link to="/">Home</Link>
           </li>
           <li className="breadcrumb-item">
             <Link to="/products">Products</Link>
           </li>
           <li className="breadcrumb-item active text-primary">Coriander</li>
         </ol>
       </div>
     </div>

     <div className="container py-5">
     <div className='mb-5'>
       <h2 className='text-primary'>
         Coriander
       </h2>
    

     </div>

     <hr />
     <hr />
     <div className='container'>
       <div className="row">
           <div className="col-md-6">
               <img src={img} className='w-100  ' alt="" />
           </div>
           <div className="col-md-6">
               <img src={img2} className='w-100 h-100 ' alt="" />
           </div>
       </div>
     </div>
     <h2 className='text-primary my-3'>Description</h2>
<p>Coriander is an herbaceous plant used in cooking and traditional medicine. It is
characterized by its aromatic leaves and seeds rich in active compounds. It contains
natural antioxidants that help promote digestive health, reduce inflammation, and regulate
blood sugar levels. It also has diuretic and body cleansing properties. Fresh coriander
leaves are used in salads and various foods, while the dried seeds are added as a spice to
add a distinctive flavor to dishes.

</p>


     <hr />
     <hr />
     <Link to="/contact" className="btn bg-primary text-light py-3 px-5">Get Offer</Link>

   </div>
 </>
}
