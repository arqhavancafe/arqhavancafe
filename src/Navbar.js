import React, { useState, useEffect } from 'react';
import {
  Coffee,
  CoffeeBean,
  PintGlass,
  TeaBag,
  Cookie,
  Cow,
  Info,
} from '@phosphor-icons/react';

const SECTION_HEIGHT = 932;
const SECTION_MARGIN = 25;
const SECTION_TOTAL = SECTION_HEIGHT + SECTION_MARGIN;

const titles = [
  'قهوه‌ها',
  'نوشیدنی‌های سرد',
  'شیک‌ها',
  'نوشیدنی‌های گرم',
  'چای‌بار',
  'کوکی و کیک',
  'درباره‌ما',
];

const icons = [
  <Coffee size={22} />,
  <PintGlass size={22} />,
  <TeaBag size={22} />,
  <Cookie size={22} />,
  <Cow size={22} />,
  <CoffeeBean size={22} />,
  <Info size={22} />,
];

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const sectionIds = [
    'coffee',
    'cold-drinks',
    'milkshakes',
    'hotdrinks',
    'teabased',
    'cookie-cakes',
    'about',
  ];

  const scrollToSection = (index) => {
    const section = document.getElementById(sectionIds[index]);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 932);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* burger */}
      {showButton && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: '50%',
            transform: 'translateX(215px)',
            width: '430px',
            height: '100%',
            zIndex: 999999,
            pointerEvents: 'none',
          }}
        >
          <button
            onClick={toggleMenu}
            style={{
              position: 'absolute',
              top: 25,
              right: 25,
              background: '#000',
              color: '#fff',
              border: 'none',
              padding: '10px 16px',
              borderRadius: '8px',
              cursor: 'pointer',
              pointerEvents: 'auto',
              fontFamily: 'Vazir',
              fontSize: '28px',
              lineHeight: '1',
              userSelect: 'none',
            }}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? '×' : '≡'}
          </button>
        </div>
      )}

      {/* Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: isOpen ? 0 : '-100%',
          width: '100%',
          height: '100%',
          background: '#fff',
          zIndex: 99999,
          transition: 'right 0.4s ease',
          direction: 'rtl',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '32px',
          fontFamily: 'Vazir',
          fontSize: '20px',
        }}
      >
        {titles.map((title, index) => (
          <div
            key={index}
            onClick={() => scrollToSection(index)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              color: '#000',
              borderBottom: '2px solid #000',
              paddingBottom: '6px',
            }}
          >
            {icons[index]}
            <span style={{ fontFamily: 'Vazir' }}>{title}</span>
          </div>
        ))}
      </div>
    </>
  );
}
