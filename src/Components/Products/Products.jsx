import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import prod1 from "../../img/Artichoke.jpg";
import prod2 from "../../img/Calendula.jpg";
import prod3 from "../../img/Caraway.jpg";
import prod4 from "../../img/Celery.jpg";
import prod5 from "../../img/Chamomile.jpg";
import prod6 from "../../img/Coriander.jpg";
import prod7 from "../../img/Dired onion.jpg";
import prod8 from "../../img/Dried lemon.jpg";
import prod9 from "../../img/Fennel.jpg";
import prod10 from "../../img/Hibiscus.jpg";
import prod11 from "../../img/Moringa.jpg";
import prod12 from "../../img/Parsley.jpg";
import prod13 from "../../img/Rosemary.jpg";
import prod14 from "../../img/Spinach.jpg";
import prod15 from "../../img/Thyme.jpg";
import prod16 from "../../img/ansie.jpg";
import prod17 from "../../img/basil.jpg";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from 'react-i18next'
export default function Products() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  useEffect(() => {
    Aos.init({
        duration: 1000
    })

}, [])
  return<>
   <div className="container-fluid bg-breadcrumb mb-5">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
          {t('prdtit')} 
          </h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#">Pages</Link>
            </li>
            <li className="breadcrumb-item active text-primary">products</li>
          </ol>
        </div>
      </div>
        {/* Products Section */}
        <div className="container-fluid service pb-5"  dir={isArabic?'rtl':''}>
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
          <h4 className="text-primary"data-aos="fade-up" data-aos-delay="200" >{t('prdtit')}</h4>
          <h1 className="display-5 mb-4"data-aos="fade-up" data-aos-delay="200">{t('qott')}</h1>
        </div>
        <div className="row g-4">
          <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item">
              <div className="service-img">
                <img src={prod1} className="img-fluid rounded-top w-100 h-50" width={336} height={240} alt="Service" />
              </div>
              <div className="rounded-bottom p-4 text-center">
                <Link to="/artichoke" className="h4 d-inline-block mb-4">{t('prod1')}</Link>
              </div>
            </div>
          </div>

          <div className="col-md-3" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item">
              <div className="service-img">
                <img src={prod2} className="img-fluid rounded-top w-100 h-50" width={336} height={240} alt="Service" />
              </div>
              <div className="rounded-bottom p-4 text-center">
                <Link to="/calendula" className="h4 d-inline-block mb-4">{t('prod2')}</Link>
              </div>
            </div>
          </div>

          <div className="col-md-3" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item">
              <div className="service-img">
                <img src={prod3} className="img-fluid rounded-top w-100 h-50" width={336} height={240} alt="Service" />
              </div>
              <div className="rounded-bottom p-4 text-center">
                <Link to="/caraway" className="h4 d-inline-block mb-4">{t('prod3')}</Link>
              </div>
            </div>
          </div>

          <div className="col-md-3" data-aos="fade-up" data-aos-delay="500">
            <div className="service-item">
              <div className="service-img">
                <img src={prod4} className="img-fluid rounded-top w-100 h-50" width={336} height={240} alt="Service" />
              </div>
              <div className="rounded-bottom p-4 text-center">
                <Link to="/celery" className="h4 d-inline-block mb-4">{t('prod4')}</Link>
              </div>
            </div>
          </div>

          <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item">
              <div className="service-img">
                <img src={prod5} className="img-fluid rounded-top w-100 h-50" width={336} height={240} alt="Service" />
              </div>
              <div className="rounded-bottom p-4 text-center">
                <Link to="/chamomile" className="h4 d-inline-block mb-4">{t('prod5')}</Link>
              </div>
            </div>
          </div>

          <div className="col-md-3" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item">
              <div className="service-img">
                <img src={prod6} className="img-fluid rounded-top w-100 h-50" width={336} height={240} alt="Service" />
              </div>
              <div className="rounded-bottom p-4 text-center">
                <Link to="/coriander" className="h4 d-inline-block mb-4">{t('prod6')}</Link>
              </div>
            </div>
          </div>

          <div className="col-md-3" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item">
              <div className="service-img">
                <img src={prod7} className="img-fluid rounded-top w-100 h-50" width={336} height={240} alt="Service" />
              </div>
              <div className="rounded-bottom p-4 text-center">
                <Link to="/dried-onion" className="h4 d-inline-block mb-4">{t('prod7')}</Link>
              </div>
            </div>
          </div>

          <div className="col-md-3" data-aos="fade-up" data-aos-delay="500">
            <div className="service-item">
              <div className="service-img">
                <img src={prod8} className="img-fluid rounded-top w-100 h-50" width={336} height={240} alt="Service" />
              </div>
              <div className="rounded-bottom p-4 text-center">
                <Link to="/dried-lemon" className="h4 d-inline-block mb-4">{t('prod8')}</Link>
              </div>
            </div>
          </div>

          <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item">
              <div className="service-img">
                <img src={prod9} className="img-fluid rounded-top w-100 h-50" width={336} height={240} alt="Service" />
              </div>
              <div className="rounded-bottom p-4 text-center">
                <Link to="/fennel" className="h4 d-inline-block mb-4">{t('prod9')}</Link>
                
              </div>
            </div>
          </div>

          <div className="col-md-3" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item">
              <div className="service-img">
                <img src={prod10} className="img-fluid rounded-top w-100 h-50" width={336} height={240} alt="Service" />
              </div>
              <div className="rounded-bottom p-4 text-center">
                <Link to="/hibiscus" className="h4 d-inline-block mb-4">{t('prod10')}</Link>
                
              </div>
            </div>
          </div>

          <div className="col-md-3" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item">
              <div className="service-img">
                <img src={prod11} className="img-fluid rounded-top w-100 h-50" width={336} height={240} alt="Service" />
              </div>
              <div className="rounded-bottom p-4 text-center">
                <Link to="/moringa" className="h4 d-inline-block mb-4">{t('prod11')}</Link>
                
              </div>
            </div>
          </div>

          <div className="col-md-3" data-aos="fade-up" data-aos-delay="500">
            <div className="service-item">
              <div className="service-img">
                <img src={prod12} className="img-fluid rounded-top w-100 h-50" width={336} height={240} alt="Service" />
              </div>
              <div className="rounded-bottom p-4 text-center">
                <Link to="/parsley" className="h4 d-inline-block mb-4">{t('prod12')}</Link>
                
              </div>
            </div>
          </div>

          <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item">
              <div className="service-img">
                <img src={prod13} className="img-fluid rounded-top w-100 h-50" width={336} height={240} alt="Service" />
              </div>
              <div className="rounded-bottom p-4 text-center">
                <Link to="/rosemary" className="h4 d-inline-block mb-4">{t('prod13')}</Link>
                
              </div>
            </div>
          </div>

          <div className="col-md-3" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item">
              <div className="service-img">
                <img src={prod14} className="img-fluid rounded-top w-100 h-50" width={336} height={240} alt="Service" />
              </div>
              <div className="rounded-bottom p-4 text-center">
                <Link to="/spinach" className="h4 d-inline-block mb-4">{t('prod14')}</Link>
                
              </div>
            </div>
          </div>

          <div className="col-md-3"data-aos="fade-up" data-aos-delay="400">
            <div className="service-item">
              <div className="service-img">
                <img src={prod15} className="img-fluid rounded-top w-100 h-50" width={336} height={240} alt="Service" />
              </div>
              <div className="rounded-bottom p-4 text-center">
                <Link to="/thyme" className="h4 d-inline-block mb-4">{t('prod15')}</Link>
                
              </div>
            </div>
          </div>

          <div className="col-md-3"data-aos="fade-up" data-aos-delay="500">
            <div className="service-item">
              <div className="service-img">
                <img src={prod16} className="img-fluid rounded-top w-100 h-50" width={336} height={240} alt="Service" />
              </div>
              <div className="rounded-bottom p-4 text-center">
                <Link to="/ansie" className="h4 d-inline-block mb-4">{t('prod16')}</Link>
                
              </div>
            </div>
          </div>

          <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item">
              <div className="service-img">
                <img src={prod17} className="img-fluid rounded-top w-100 h-50" width={336} height={240} alt="Service" />
              </div>
              <div className="rounded-bottom p-4 text-center">
                <Link to="/basil" className="h4 d-inline-block mb-4">{t('prod17')}</Link>
                
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>

  </>
}
