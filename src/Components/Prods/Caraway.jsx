import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../img/caraway details.jpg"
import img2 from "../../img/caraway details2.jpg"
export default function Caraway() {
  return <>
  <div className="container-fluid bg-breadcrumb">
       <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
         <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
         Caraway
         </h4>
         <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
           <li className="breadcrumb-item">
             <Link to="/">Home</Link>
           </li>
           <li className="breadcrumb-item">
             <Link to="/products">Products</Link>
           </li>
           <li className="breadcrumb-item active text-primary">Caraway</li>
         </ol>
       </div>
     </div>

     <div className="container py-5">
     <div className='mb-5'>
       <h2 className='text-primary'>
         Caraway
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
<p>Caraway is a herbaceous plant whose seeds are used in traditional medicine and cooking.
It is characterized by its strong flavor and aroma. It contains natural compounds such as
carvone and limonene, which help improve digestion, relieve bloating and cramps, and
soothe stomach upsets. It also has antioxidant and antibacterial properties, making it
beneficial for immune health. Caraway is used in herbal drinks and is added to baked
goods and foods to add a distinctive flavor.
</p>


     <hr />
     <hr />
     <Link to="/contact" className="btn bg-primary text-light py-3 px-5">Get Offer</Link>

   </div>
 </>
}
