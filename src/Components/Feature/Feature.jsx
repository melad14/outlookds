import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
export default function Feature() {

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';


  const featureData = [
    {
      icon: "fas fa-chart-line",
      title: t('fet1'),
      description: t('fet2'),
      delay: "0.2s",
    },
    {
      icon: "fas fa-university",
      title: t('fet3'),
      description:t('fet4'),
      delay: "0.4s",
    },
    {
      icon: "fas fa-file-alt",
      title:t('fet5'),
      description:t('fet6'),
      delay: "0.6s",
    },
    {
      icon: "fas fa-hand-holding-usd",
      title: t('fet7'),
      description: t('fet8'),
      delay: "0.8s",
    },
  ];

  return <>
   <div className="container-fluid bg-breadcrumb mb-5">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
           {t('features')}
          </h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#">Pages</Link>
            </li>
            <li className="breadcrumb-item active text-primary">Features</li>
          </ol>
        </div>
      </div>
      
      <div className="container-fluid feature pb-5" dir={isArabic?'rtl':''}>
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
          <h4 className="text-primary" data-aos="fade-up" data-aos-delay="200">{t('title2')}</h4>
          <h1 className="display-5 mb-4" data-aos="fade-up" data-aos-delay="200">{t('qote2')}</h1>
      
        </div>
        <div className="row g-4">
          {featureData.map((feature, index) => (
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" key={index} data-wow-delay={feature.delay} data-aos="fade-up" data-aos-delay="400">
              <div className="feature-item h-100 p-4">
                <div className="feature-icon p-4 mb-4">
                  <i className={`${feature.icon} fa-4x text-primary`}></i>
                </div>
                <h4>{feature.title}</h4>
                <p className="mb-4">{feature.description}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
}
