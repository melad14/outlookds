import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
export default function Contact() {

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return<div >

     <div className="container-fluid bg-breadcrumb mb-5">
      <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
        <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
        {t('contact')} 
        </h4>
        <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="#">Pages</Link>
          </li>
          <li className="breadcrumb-item active text-primary">Contact us</li>
        </ol>
      </div>
    </div>
   
    <div className="container-fluid contact py-5" dir={isArabic?'rtl':''} >
      <div className="container py-5">
        <div className="row g-5">
          {/* Contact Info */}
          <div className="bg-light p-5 rounded wow fadeInUp col-md-6 " data-wow-delay="0.2s">
            <h4 className="text-primary">{t('send')}</h4>
            <p className="mb-4">
          
            {t('Please Feel Free To Contact Us')}
            </p>
            <form>
                <div className="row g-4">
                {[{ id: "name", label: t('lbl1'), type: "text" },
                  { id: "email", label:t('lbl2'), type: "email" },
                  { id: "phone", label: t('lbl3'), type: "phone" },
                  { id: "subject", label: t('lbl4'), type: "text" }].map((field, index) => (
                  <div className={index < 4 ? "col-lg-12 col-xl-6" : "col-12"} key={field.id}>
                    <div className="form-floating">
                      <input type={field.type} className="form-control border-0" id={field.id} placeholder={field.label} />
                      <label htmlFor={field.id}>{field.label}</label>
                    </div>
                  </div>
                ))}
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{ height: "160px" }}></textarea>
                    <label htmlFor="message">{t('lbl5')}</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3">{t('lbl6')}</button>
                </div>
              </div>
            </form>
          </div>
          <div className="bg-light rounded p-5  col-md-6">
            <h4 className="text-primary mb-4">{t('Get in Touch')}</h4>
            <div className="row g-4">
              {[
                { icon: "map-marker-alt", title: t('lbll1'), text: t('lbll2') },
                { icon: "envelope", title: t('lbll3'), text: "Minalogistics20@gmail.com" },
                { icon: "phone-alt", title: t('lbll4'), text:t('lbll5') },
              ].map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="contact-add-item">
                    <div className="contact-icon text-primary mb-4">
                      <i className={`fas fa-${item.icon} fa-2x`}></i>
                    </div>
                    <div>
                      <h4>{item.title}</h4>
                      <p className="mb-0">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Contact Form */}
          
        </div>
      </div>
    </div>

    
  </div>
}
