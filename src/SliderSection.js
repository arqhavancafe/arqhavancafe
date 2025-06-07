import React, { useState } from 'react';

export default function Slider({ sections, labels, gradient }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideWidth = 382;
  const gap = 24;
  const reversedSections = [...sections].reverse();
  const totalSlides = sections.length;

  return (
    <>
      {/* Wrapper */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: 77777,
          overflow: 'hidden',
          width: `${slideWidth + gap * 2}px`,
        }}
      >
        {/* Track */}
        <div
          style={{
            display: 'flex',
            gap: `${gap}px`,
            padding: `0 ${gap}px`,
            marginLeft: `-${(slideWidth + gap) * (totalSlides - 1 - activeIndex)}px`,
            transition: 'margin-left 0.5s ease',
          }}
        >
          {reversedSections.map((content, index) => (
            <div
              key={index}
              className="section-content"
              style={{
                backgroundImage: gradient,
                width: `${slideWidth}px`,
                flexShrink: 0,
                marginTop: '199px',
              }}
            >
              <div className="temp-content">
                {content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="slider-buttons-wrapper">
        {labels.map((label, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`slider-button${activeIndex === index ? ' active' : ''}`}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
}