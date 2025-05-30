import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../img/Basil details.jpeg"
import img2 from "../../img/basil.jpg"
export default function Basil() {
  return <>
  <div className="container-fluid bg-breadcrumb">
       <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
         <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
         Basil
         </h4>
         <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
           <li className="breadcrumb-item">
             <Link to="/">Home</Link>
           </li>
           <li className="breadcrumb-item">
             <Link to="/products">Products</Link>
           </li>
           <li className="breadcrumb-item active text-primary">Basil</li>
         </ol>
       </div>
     </div>

     <div className="container py-5">
     <div className='mb-5'>
       <h2 className='text-primary'>
         Basil
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
<p>Basil is an aromatic plant characterized by its broad green leaves and fragrant aroma. It is
used in cooking and traditional medicine. It contains volatile oils such as eugenol, which
give it antibacterial and anti-inflammatory properties. It is used to improve digestion, calm
the nervous system, and strengthen the immune system. It also helps relieve stress and
improve heart health. It can be added fresh to salads and foods or used in herbal teas and
essential oils.</p>


     <hr />
     <hr />
     <Link to="/contact" className="btn bg-primary text-light py-3 px-5">Get Offer</Link>

   </div>
 </>
}
