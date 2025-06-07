import React, { useEffect, useRef } from 'react';
import './App.css'
import HeaderSection from './HeaderSection';
import Section from './Section';
import LoadingScreen from './LoadingScreen';
import BurgerMenu from './Navbar';
import Slider from './SliderSection';
import Footer from './Footer';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import "./Footer.css";


function App() {
  useEffect(() => {
    const sectionWrappers = document.querySelectorAll('.section-wrapper');
    
    const handleScroll = () => {
      const viewportTop = window.scrollY;

      sectionWrappers.forEach(wrapper => {
        const wrapperRect = wrapper.getBoundingClientRect();
        const wrapperTop = wrapperRect.top + window.scrollY;
        
        const content = wrapper.querySelector('.section-content');
        if (!content) return;
        
        const contentRect = content.getBoundingClientRect();
        const contentTop = contentRect.top + window.scrollY;
        
        // SimpleBar'ın içindeki content wrapper'ı bul
        const simplebarWrapper = wrapper.querySelector('.simplebar-content-wrapper');
        if (!simplebarWrapper) return;
        // Viewport'un başı section-wrapper ile section-content arasında mı?
        if (viewportTop > wrapperTop && viewportTop < contentTop) {
          wrapper.classList.add('active-scroll-menu');
          wrapper.classList.remove('deactive-scroll-menu');

        } else {
          wrapper.classList.add('deactive-scroll-menu');
          wrapper.classList.remove('active-scroll-menu');
        }
      });
    };

    // İlk yüklemede ve her scroll'da kontrol et
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // İlk render için çağır

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <LoadingScreen/>
      <BurgerMenu/>
      <HeaderSection/>
        <Section
            title="<br/>Coffee"
            gradient="158.932deg,rgba(171, 43, 0, 0.8)  0%, #FFFFFF 75%"
            elemId="coffee"
            modelViewerProps={{
              modelUrl: process.env.PUBLIC_URL + "/models/coffee_cup.glb",
              scale: 12,
              wrapperClass: "coffeecup-model-wrapper",
              cameraPosition: [10, 30, 24],
              fov: 62,
              rotationSpeed: 0.0005,
              scrollRotationFactor: 0.00015,
              scrollDownMultiplier: 1.6,
              autoRotate: true,
              rotationClamp: 0.5,
              scrollEffectMin: 555,
              scrollEffectMax:Infinity,
              scrollOffsetClamp:{min: 575, max: 1700},
              scrollStartRotation: Math.PI / 9.9
            }}
        >
          <Slider
            gradient="linear-gradient(159.877deg, rgba(171, 43, 0, 0.8) 0%, rgba(255,255,255,0.6) 40%)"
            labels={['قهوه گرم', 'قهوه سرد']}
            sections={[
              <div className="menu-section">
                <h3 className="menu-title" style={{backgroundImage: 'linear-gradient(158.932deg, rgba(171, 43, 0, 0.75) 0%, rgba(255, 255, 255, 0) 120%)'}}>
                  قهوه گرم
                </h3>
                <div className="menu-item sar-list">
                    <span>آیتم‌ها</span>
                    <span>عربیکا / ربوستا / ۵۰۵۰</span>
                </div>
                <SimpleBar className="menu-scroll-area">
                  <div className="menu-item">
                    <span>اسپرسو</span>
                    <span>۹۵ / ۷۵ / ۸۵</span>
                  </div>
                  <div className="menu-item">
                    <span>آمریکانو</span>
                    <span>۹۵ / ۷۵ / ۸۵</span>
                  </div>
                  <div className="menu-item">
                    <span>کاپوچینو</span>
                    <span>۱۱۰ / ۹۰ / ۱۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>لته</span>
                    <span>۱۱۰ / ۹۰ / ۱۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>کارامل ماکیاتو</span>
                    <span>۱۳۰ / ۱۱۰ / ۱۲۰</span>
                  </div>
                  <div className="menu-item">
                    <span>موکا</span>
                    <span>۱۳۰ / ۱۱۰ / ۱۲۰</span>
                  </div>
                  <div className="menu-item">
                    <span>کورتادو</span>
                    <span>۱۰۵ / ۸۵ / ۹۵</span>
                  </div>
                  <div className="menu-item">
                    <span>قهوه ترک</span>
                    <span>۹۵٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>قهوه یونانی</span>
                    <span>۱۰۵٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>سیروپ اضافی</span>
                    <span>۱۵٬۰۰۰+</span>
                  </div>
                </SimpleBar>
              </div>,
              <div className="menu-section">
                <h3 className="menu-title" style={{backgroundImage: 'linear-gradient(158.932deg, rgba(171, 43, 0, 0.75) 0%, rgba(255, 255, 255, 0) 120%)'}}>
                  قهوه سرد
                </h3>
                
                <div className="menu-item sar-list">
                    <span>آیتم‌ها</span>
                    <span>عربیکا / ربوستا / ۵۰۵۰</span>
                </div>
                <SimpleBar className="menu-scroll-area">
                  <div className="menu-item">
                    <span>کن هیلو</span>
                    <span>۱۰۰ / ۸۰ / ۹۰</span>
                  </div>
                  <div className="menu-item">
                    <span>آیس آمریکانو</span>
                    <span>۱۰۵ / ۸۵ / ۹۵</span>
                  </div>
                  <div className="menu-item">
                    <span>آیس لته</span>
                    <span>۱۲۰ / ۱۰۰ / ۱۱۰</span>
                  </div>
                  <div className="menu-item">
                    <span>آیس کارامل ماکیاتو</span>
                    <span>۱۴۰ / ۱۲۰ / ۱۳۰</span>
                  </div>
                  <div className="menu-item">
                    <span>آیس موکا</span>
                    <span>۱۴۰ / ۱۲۰ / ۱۳۰</span>
                  </div>
                  <div className="menu-item">
                    <span>آیس آفاگاتو</span>
                    <span>۱۴۰ / ۱۲۰ / ۱۳۰</span>
                  </div>
                  <div className="menu-item">
                    <span>کلد برو</span>
                    <span>۱۱۰٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>سیروپ اضافی</span>
                    <span>۱۵٬۰۰۰+</span>
                  </div>
                </SimpleBar>
              </div>
            ]}
          />
        </Section>
        <Section
            title="Cold<br/>Drinks"
            gradient="158.932deg,rgba(190, 0, 0, 0.8)  0%, #FFFFFF 75%"
            elemId="cold-drinks"
            modelViewerProps={{
                modelUrl: process.env.PUBLIC_URL + "/models/dragon_fruit.glb",
                scale: 2.9,
                wrapperClass: "dragon-model-wrapper",
                cameraPosition: [0, 2, 4],
                fov: 62,
                rotationSpeed: 0.001,
                scrollRotationFactor: 0.0002,
                scrollDownMultiplier: 1.6,
                scrollEffectMin: 910,
                scrollEffectMax:Infinity,
                scrollOffsetClamp:{min: 900, max: 2650}
            }}
        >
          <Slider
            gradient="linear-gradient(159.877deg, rgba(192, 22, 31, 0.8) 0%, rgba(255,255,255,0.6) 40%)"
            labels={['ماکتیل', 'اسموتی']}
            sections={[
              <div className="menu-section">
                <h3 className="menu-title" style={{backgroundImage: 'linear-gradient(158.932deg, rgba(190, 0, 0, 0.75) 0%, rgba(255, 255, 255, 0) 120%)'}}>
                  ماکتیل‌ها
                </h3>
                <div className="menu-item sar-list">
                    <span>آیتم‌ها</span>
                    <span>قیمت</span>
                </div>
                <SimpleBar className="menu-scroll-area">
                  <div className="menu-item">
                    <span>جامائیکا</span>
                    <span>۱۲۰٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>سَوِرتیست</span>
                    <span>۱۳۰٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>موهیتو</span>
                    <span>۱۱۰٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>لیموناد</span>
                    <span>۱۱۰٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>پرشین فیزی</span>
                    <span>۱۲۰٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>ارغوانی</span>
                    <span>۱۳۰٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>پیناکولادا</span>
                    <span>۱۲۰٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>بلوهاوایی</span>
                    <span>۱۲۰٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>چرچیل</span>
                    <span>۱۰۰٬۰۰۰</span>
                  </div>
                </SimpleBar>
              </div>,
              <div className="menu-section">
                <h3 className="menu-title" style={{backgroundImage: 'linear-gradient(158.932deg, rgba(190, 0, 0, 0.75) 0%, rgba(255, 255, 255, 0) 120%)'}}>
                  اسموتی‌ها
                </h3>
                <div className="menu-item sar-list">
                    <span>آیتم‌ها</span>
                    <span>قیمت</span>
                </div>
                <SimpleBar className="menu-scroll-area">
                  <div className="menu-item">
                    <span>اسموتی سبز</span>
                    <span>--------</span>
                  </div>
                  <div className="menu-item">
                    <span>اسموتی زرد</span>
                    <span>--------</span>
                  </div>
                  <div className="menu-item">
                    <span>اسموتی قرمز</span>
                    <span>--------</span>
                  </div>
                  <div className="menu-item">
                    <span>اسموتی نارنجی</span>
                    <span>--------</span>
                  </div>
                </SimpleBar>
              </div>,
            ]}
          />
        </Section>
        <Section
            title="<br/>Milkshakes"
            gradient="158.932deg,rgba(243, 39, 66, 0.8)  0%, #FFFFFF 75%"
            elemId="milkshakes"
            modelViewerProps={{
              modelUrl:process.env.PUBLIC_URL + "/models/mk2.png",
              wrapperClass: "milkshake-model-wrapper",
              scrollDownMultiplier: 1.6,
              scrollOffsetClamp:{min: 360, max: 1900},
            }}
        >
          <div className="section-content"
              style={{
                  backgroundImage:`linear-gradient(159.877deg,rgba(245, 61, 95,.8) 0%, rgba(255,255,255,0.6) 40%)`
              }}
          >
            <div className="temp-content">
              <div className="menu-section">
                <h3 className="menu-title" style={{backgroundImage: 'linear-gradient(158.932deg, rgba(243, 39, 66, 0.75) 0%, rgba(255, 255, 255, 0) 120%)'}}>
                  شیک‌ها
                </h3>
                <div className="menu-item sar-list">
                    <span>آیتم‌ها</span>
                    <span>قیمت</span>
                </div>
                <SimpleBar className="menu-scroll-area">
                  <div className="menu-item">
                    <span>بادام‌زمینی کارامل</span>
                    <span>۱۹۵٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>شکلات</span>
                    <span>۱۶۵٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>نوتلا</span>
                    <span>۲۳۰٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>اسپرسو</span>
                    <span>۱۷۵٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>اورئو</span>
                    <span>۲۱۵٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>لوتوس</span>
                    <span>۲۱۰٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>توت فرنگی</span>
                    <span>۲۱۰٬۰۰۰</span>
                  </div>
                </SimpleBar>
              </div>
            </div>
          </div>
        </Section>
          <Section
            title="Hot<br/>Drinks"
            gradient="158.932deg,rgba(212, 64, 10, 0.8)  0%, #FFFFFF 75%"
            elemId="hotdrinks"
            scrollOffsetClamp = {{ min: -300, max: 300 }}
            modelViewerProps={{
                modelUrl: process.env.PUBLIC_URL + "/models/model2.glb",
                scale: 20,
                wrapperClass: "caramelcup-model-wrapper",
                cameraPosition: [0, 7, 4],
                fov: 62,
                rotationSpeed: 0.001,
                scrollRotationFactor: 0.0002,
                scrollDownMultiplier: .8,
                scrollStartRotation: Math.PI/1.3,
                scrollEffectMin: 0,
                scrollEffectMax:Infinity,
                scrollOffsetClamp:{min: 0, max: 2760}
            }}
        >
          <div className="section-content"
              style={{
                  backgroundImage:`linear-gradient(159.877deg, rgba(214, 86, 40, 0.8) 0%, rgba(255,255,255,0.6) 40%)`
              }}
          >
            <div className="temp-content">
              <div className="menu-section">
                <h3 className="menu-title" style={{backgroundImage: 'linear-gradient(158.932deg, rgba(212, 64, 10, 0.75) 0%, rgba(255, 255, 255, 0) 120%)'}}>
                 بار گرم
                </h3>
                <div className="menu-item sar-list">
                    <span>آیتم‌ها</span>
                    <span>قیمت</span>
                </div>
                <SimpleBar className="menu-scroll-area">
                  <div className="menu-item">
                    <span>هات چاکلت</span>
                    <span>۱۰۰٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>وایت چاکلت</span>
                    <span>۱۰۰٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>هات پسته زعفران</span>
                    <span>۱۲۰٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>هات نوتلا</span>
                    <span>۱۲۰٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>شیر نسکافه</span>
                    <span>۱۰۰٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>شیر کاکائو</span>
                    <span>۹۵٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>هات لوتوس</span>
                    <span>۱۲۰٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>شیر عسل دارچین</span>
                    <span>۱۲۰٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>چای ماسالا</span>
                    <span>۱۰۰٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>ماچا لته</span>
                    <span>۱۴۰٬۰۰۰</span>
                  </div>
                </SimpleBar>
              </div>
            </div>
          </div>
        </Section>
        <Section
            title="Tea<br/>Based"
            gradient="158.932deg,rgba(125, 0, 3, .8)  0%, #FFFFFF 75%"
            elemId="teabased"
            modelViewerProps={{
              modelUrl: process.env.PUBLIC_URL + "/models/teapot.glb",
              scale: 0.4,
              wrapperClass: "teapot-model-wrapper",
              cameraPosition: [0, 14, 8],
              fov: 62,
              rotationSpeed: 0.0007,
              scrollRotationFactor: 0.00015,
              scrollDownMultiplier: 1.6,
              autoRotate: true,
              rotationClamp: 0.5,
              scrollEffectMin: 735,
              scrollEffectMax:Infinity,
              scrollOffsetClamp:{min: 735, max: 2250}
              // scrollStartRotation: Math.PI / 3.8
            }}
        >
          <Slider
            gradient="linear-gradient(159.877deg, rgba(127, 22, 33, 0.8) 0%, rgba(255,255,255,0.6) 40%)"
            labels={['چای گرم', 'چای سرد']}
            sections={[
              <div className="menu-section">
                <h3 className="menu-title" style={{backgroundImage: 'linear-gradient(158.932deg, rgba(125, 0, 3, 0.75) 0%, rgba(255, 255, 255, 0) 120%)'}}>
                  چای گرم
                </h3>
                <div className="menu-item sar-list">
                    <span>آیتم‌ها</span>
                    <span>قیمت</span>
                </div>
                <SimpleBar className="menu-scroll-area">
                  <div className="menu-item">
                    <span>چای نبات</span>
                    <span>۵۵٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>چای سبز</span>
                    <span>۷۰٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>چای ترش</span>
                    <span>۷۰٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>به لیمو</span>
                    <span>۷۰٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>دمنوش سلامت</span>
                    <span>۷۰٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>دمنوش آرامش</span>
                    <span>۷۰٬۰۰۰</span>
                  </div>
                </SimpleBar>
              </div>,
              <div className="menu-section">
                <h3 className="menu-title" style={{backgroundImage: 'linear-gradient(158.932deg, rgba(125, 0, 3, 0.75) 0%, rgba(255, 255, 255, 0) 120%)'}}>
                  چای سرد
                </h3>
                <div className="menu-item sar-list">
                    <span>آیتم‌ها</span>
                    <span>قیمت</span>
                </div>
                <SimpleBar className="menu-scroll-area">
                  <div className="menu-item">
                    <span>آیس‌تی لیمو</span>
                    <span>۱۰۰٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>آیس‌تی هلو</span>
                    <span>۱۰۰٬۰۰۰</span>
                  </div>
                  <div className="menu-item">
                    <span>آیس‌تی توت‌فرنگی</span>
                    <span>۱۰۰٬۰۰۰</span>
                  </div>
                </SimpleBar>
              </div>
            ]}
          />
        </Section>
        <Section
            title="Cookie &<br/>Cakes"
            gradient="158.932deg,rgba(147, 44, 0, 0.8)  0%, #FFFFFF 75%"
            elemId="cookie-cakes"
            modelViewerProps={{
              modelUrl: process.env.PUBLIC_URL + "/models/cheese_cake.glb",
              scale: 119,
              wrapperClass: "cheesecake-model-wrapper",
              cameraPosition: [10, 24, 3],
              fov: 62,
              rotationSpeed: 0.0005,
              scrollRotationFactor: 0.00015,
              scrollDownMultiplier: 1.6,
              autoRotate: true,
              rotationClamp: 0.5,
              scrollEffectMin: 533,
              scrollEffectMax:Infinity,
              scrollOffsetClamp:{min: 535, max: 1700},
              scrollStartRotation: Math.PI / 2
            }}
        >
          <div className="section-content"
              style={{
                  backgroundImage:`linear-gradient(159.877deg,rgba(149, 66, 30, 0.8) 0%, rgba(255,255,255,0.6) 40%)`
              }}
          >
            <div className="temp-content">
              <div className="menu-section">
                <h3 className="menu-title" style={{backgroundImage: 'linear-gradient(158.932deg, rgba(147, 44, 0, 0.75) 0%, rgba(255, 255, 255, 0) 120%)'}}>
                  کوکی و کیک‌
                </h3>
                <div className="menu-item sar-list">
                    <span>آیتم‌ها</span>
                    <span>قیمت</span>
                </div>
                <SimpleBar className="menu-scroll-area">
                  <div className="menu-item">
                    <span>کوکی ردولوت</span>
                    <span>--------</span>
                  </div>
                  <div className="menu-item">
                    <span>کوکی دبل‌چاکلت</span>
                    <span>--------</span>
                  </div>
                  <div className="menu-item">
                    <span>کوکی پسته‌ای</span>
                    <span>--------</span>
                  </div>
                  <div className="menu-item">
                    <span>کوکی نیویورکی</span>
                    <span>--------</span>
                  </div>
                  <div className="menu-item">
                    <span>کوکی لوتوس</span>
                    <span>--------</span>
                  </div>
                  <div className="menu-item">
                    <span>کیک روز</span>
                    <span>--------</span>
                  </div>

                </SimpleBar>
              </div>
            </div>
          </div>
        </Section>
        <Footer/>
    </div>
  )
}

export default App