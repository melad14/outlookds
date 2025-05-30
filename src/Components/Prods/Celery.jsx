import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../img/celery details.jpeg"
import img2 from "../../img/celery details2.jpeg"
export default function Celery() {
  return <>
  <div className="container-fluid bg-breadcrumb">
       <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
         <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
         Celery
         </h4>
         <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
           <li className="breadcrumb-item">
             <Link to="/">Home</Link>
           </li>
           <li className="breadcrumb-item">
             <Link to="/products">Products</Link>
           </li>
           <li className="breadcrumb-item active text-primary">Celery</li>
         </ol>
       </div>
     </div>

     <div className="container py-5">
     <div className='mb-5'>
       <h2 className='text-primary'>
         Celery
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
<p>Celery is a herbaceous plant characterized by its long, crunchy stems and aromatic leaves.
It is used in cooking and natural medicine. It is high in fiber, vitamins such as vitamin K, and
minerals such as potassium. It is known for its diuretic properties, which help rid the body
of toxins and promote kidney health. It also helps reduce inflammation and lower blood
pressure.
</p>


     <hr />
     <hr />
     <Link to="/contact" className="btn bg-primary text-light py-3 px-5">Get Offer</Link>

   </div>
 </>
}
