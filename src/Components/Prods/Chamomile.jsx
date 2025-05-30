import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../img/chamomile details.jpg"
import img2 from "../../img/Chamomile details2.jpg"
export default function Chamomile() {
  return <>
  <div className="container-fluid bg-breadcrumb">
       <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
         <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
         Chamomile
         </h4>
         <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
           <li className="breadcrumb-item">
             <Link to="/">Home</Link>
           </li>
           <li className="breadcrumb-item">
             <Link to="/products">Products</Link>
           </li>
           <li className="breadcrumb-item active text-primary">Chamomile</li>
         </ol>
       </div>
     </div>

     <div className="container py-5">
     <div className='mb-5'>
       <h2 className='text-primary'>
         Chamomile
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
<p>Chamomile is a herbaceous plant known for its small, fragrant white flowers. It has been
used in traditional medicine since ancient times to calm the nerves and improve sleep
quality. It contains calming compounds such as apigenin, which helps reduce stress and
anxiety and alleviate insomnia. It is also used to treat digestive disorders such as cramps
and bloating, and has anti-inflammatory properties that help soothe the skin and treat sore
throats. It is commonly prepared as a warm herbal tea or applied topically to treat skin
conditions and reduce redness and irritation.
</p>


     <hr />
     <hr />
     <Link to="/contact" className="btn bg-primary text-light py-3 px-5">Get Offer</Link>

   </div>
 </>
}
