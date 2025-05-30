import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../img/Artichoke details.jpg"
import img2 from "../../img/Artichoke.jpg"
export default function Artichoke() {
  return <>
  <div className="container-fluid bg-breadcrumb">
       <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
         <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
         Artichoke
         </h4>
         <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
           <li className="breadcrumb-item">
             <Link to="/">Home</Link>
           </li>
           <li className="breadcrumb-item">
             <Link to="/products">Products</Link>
           </li>
           <li className="breadcrumb-item active text-primary">Artichoke</li>
         </ol>
       </div>
     </div>

     <div className="container py-5">
     <div className='mb-5'>
       <h2 className='text-primary'>
         Artichoke
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
<p>Artichoke is a nutrient-rich and antioxidant-rich plant known for its significant benefits for
liver and digestive health. It contains cynarin, which helps stimulate bile production,
improving digestion and promoting liver health. It also contributes to lowering cholesterol
levels, regulating blood sugar, and supporting heart health. It is consumed steamed or
grilled, and its extracts are used in some nutritional supplements to enhance liver function
and digestion.</p>


     <hr />
     <hr />
     <Link to="/contact" className="btn bg-primary text-light py-3 px-5">Get Offer</Link>

   </div>
 </>
}
