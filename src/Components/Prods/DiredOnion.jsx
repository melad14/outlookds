import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../img/Onions_flavor.jpg"
import img2 from "../../img/Onions_flavor2.jpg"
export default function DiredOnion() {
  return <>
  <div className="container-fluid bg-breadcrumb">
       <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
         <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
         Dried Onion

         </h4>
         <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
           <li className="breadcrumb-item">
             <Link to="/">Home</Link>
           </li>
           <li className="breadcrumb-item">
             <Link to="/products">Products</Link>
           </li>
           <li className="breadcrumb-item active text-primary">Dried Onion
</li>
         </ol>
       </div>
     </div>

     <div className="container py-5">
     <div className='mb-5'>
       <h2 className='text-primary'>
         Dried Onion

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
<p>Dried onion is a preserved form of fresh onion, characterized by its strong flavor and high
concentration of active compounds such as sulfides, which have antibacterial and antiinflammatory properties. It is used as a cooking spice to add a rich flavor to foods and is
known for its health benefits, such as boosting immunity, improving heart health, and
regulating blood sugar levels. It can be added to soups, sauces, and dried seasonings, and
is a suitable alternative to fresh onions when a strong flavor is needed without the
moisture.
</p>


     <hr />
     <hr />
     <Link to="/contact" className="btn bg-primary text-light py-3 px-5">Get Offer</Link>

   </div>
 </>
}
