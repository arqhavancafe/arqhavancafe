import React from "react";
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  Clock,
  Star,
} from "phosphor-react";

const Footer = () => {
  return (
    <footer id="about" className="footer-container" dir="rtl">
      {/* Adres */}
      <h2>تماس با ما</h2>
      <div className="footer-address">
        <MapPin size={22} color="white" />
        <p>خیابان عمار، نرسیده به خیابان شفا، پلاک ۱۲</p>
      </div>

      {/* Telefon ve Email */}
      <div className="footer-contact">
        <div className="footer-contact-item">
          <Phone size={20} color="white" />
          <span>۰۹۱۴xxxxxxxx</span>
        </div>
        <div className="footer-contact-item">
          <EnvelopeSimple size={20} color="white" />
          <span>arqhavancafe@gmail.com</span>
        </div>
      </div>

      {/* Google Map */}
      <div className="footer-map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.136123506385!2d45.04794771090258!3d37.55185657192568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4005530035204d11%3A0x186fe5a8f94a6c0e!2sArqhavan%20caf%C3%A9!5e0!3m2!1sen!2str!4v1748523082845!5m2!1sen!2str"
          loading="lazy"
        ></iframe>
      </div>

      {/* Değerlendirme Butonu */}
      <div className="footer-rating">
        <a
          href="https://www.google.com/maps/place/Arqhavan+caf%C3%A9/@37.5512082,45.0470958,16.09z/data=!4m16!1m9!3m8!1s0x4005530035204d11:0x186fe5a8f94a6c0e!2sArqhavan+caf%C3%A9!8m2!3d37.5518566!4d45.050528!9m1!1b1!16s%2Fg%2F11w2cykhzn!3m5!1s0x4005530035204d11:0x186fe5a8f94a6c0e!8m2!3d37.5518566!4d45.050528!16s%2Fg%2F11w2cykhzn?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-rating-button"
        >
          <Star size={18} weight="fill" color="currentColor" />
          ما را ارزیابی کنید
        </a>
      </div>

      {/* İş Saatleri */}
      <h2>ساعات کاری</h2>
      <div className="footer-hours">
        <div className="footer-hours-bg" />
        <div className="footer-hours-content">
          <div className="footer-hours-item">
            <Clock size={18} color="white" />
            <span>شنبه تا پنج شنبه ۸:۰۰ الی ۲۳:۰۰</span>
          </div>
          <div className="footer-hours-item">
            <Clock size={18} color="white" />
            <span>جمعه ها ۹:۳۰ الی ۲۳:۰۰</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        © تمامی حقوق برای کافه ارغوان محفوظ است.
      </div>
    </footer>
  );
};

export default Footer;
