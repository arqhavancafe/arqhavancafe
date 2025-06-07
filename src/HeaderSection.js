import ModelViewer from './ModelViewer';
import {
  InstagramLogo,
  SpotifyLogo,
  WhatsappLogo,
  TelegramLogo,
  TwitterLogo,
  XLogo,
  CaretDoubleDown
} from '@phosphor-icons/react';
import TypeIt from "typeit-react";

function HeaderSection() {
  const handleScroll = () => {
    const coffeeSection = document.getElementById('coffee');
    if (coffeeSection) {
      coffeeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="section-wrapper">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Logo"/>
      </div>
      <ModelViewer
        modelUrl= {process.env.PUBLIC_URL + "/models/model.glb"}
        scale={0.75}
        wrapperClass="papercup-model-wrapper"
        cameraPosition={[-5, 6, 5]}
        fov={62}
        rotationSpeed={0.001}
        scrollRotationFactor={0.0002}
        scrollDownMultiplier={2}
        rotationClamp={0.3}
        resetLimit={Math.PI / 2}
        scrollEffectMin={0}
        scrollEffectMax={300}
        scrollOffsetClamp ={{min: 50, max: 1000}}
      />
      <div id="section-content-header" className="section-content">
        <h2 id='typeing' style={{ display: 'none' }}>
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                .type("Just brewed")
                .type("<br/>")
                .type('<span class="bold-tag">Happiness</span>')
                .type("<br/>")
                .type("in a cup!")
                .pause(1200)
                .move(-10, { delay: 50 })
                .delete(9, { delay: 60 })
                .type('<span class="bold-tag">Dream</span>')
                .pause(2800)
                .delete(5, { delay: 60 })
                .type('<span class="bold-tag">Positivity</span>')
                .pause(2800)
                .delete(10, { delay: 60 })
                .type('<span class="bold-tag">Inspiration</span>')
                .pause(2800)
                .delete(11, { delay: 60 })
                .type('<span class="bold-tag">Hope</span>')
                .pause(2800)
                .delete(4, { delay: 60 })
                .type('<span class="bold-tag">Delight</span>')
                .pause(2800)
                .delete(7, { delay: 60 })
                .type('<span class="bold-tag">Love</span>')
                .pause(2800)
                .delete(4, { delay: 60 })
                .type('<span class="bold-tag">Warmth</span>')
                .pause(2800)
                .delete(6, { delay: 60 })
                .type('<span class="bold-tag">Magic</span>')
                .pause(2800)
                .delete(5, { delay: 60 })
                .type('<span class="bold-tag">Calm</span>')
                .pause(2800)
                .delete(4, { delay: 60 })
                .type('<span class="bold-tag">Happiness</span>')
                .pause(2800)
                .delete(9, { delay: 60 })
                .type('<span class="bold-tag">Dream</span>')
                .pause(2800)
                .delete(5, { delay: 60 })
                .type('<span class="bold-tag">Positivity</span>')
                .pause(2800)
                .delete(10, { delay: 60 })
                .type('<span class="bold-tag">Inspiration</span>')
                .pause(2800)
                .delete(11, { delay: 60 })
                .type('<span class="bold-tag">Hope</span>')
                .pause(2800)
                .delete(4, { delay: 60 })
                .type('<span class="bold-tag">Delight</span>')
                .pause(2800)
                .delete(7, { delay: 60 })
                .type('<span class="bold-tag">Love</span>')
                .pause(2800)
                .delete(4, { delay: 60 })
                .type('<span class="bold-tag">Warmth</span>')
                .pause(2800)
                .delete(6, { delay: 60 })
                .type('<span class="bold-tag">Magic</span>')
                .pause(2800)
                .delete(5, { delay: 60 })
                .type('<span class="bold-tag">Calm</span>')
                .pause(2800)
                .delete(4, { delay: 60 })
                .type('<span class="bold-tag">Happiness</span>')
                .pause(2800)
                .delete(9, { delay: 60 })
                .type('<span class="bold-tag">Dream</span>')
                .pause(2800)
                .delete(5, { delay: 60 })
                .type('<span class="bold-tag">Positivity</span>')
                .pause(2800)
                .delete(10, { delay: 60 })
                .type('<span class="bold-tag">Inspiration</span>')
                .pause(2800)
                .delete(11, { delay: 60 })
                .type('<span class="bold-tag">Hope</span>')
                .pause(2800)
                .delete(4, { delay: 60 })
                .type('<span class="bold-tag">Delight</span>')
                .pause(2800)
                .delete(7, { delay: 60 })
                .type('<span class="bold-tag">Love</span>')
                .pause(2800)
                .delete(4, { delay: 60 })
                .type('<span class="bold-tag">Warmth</span>')
                .pause(2800)
                .delete(6, { delay: 60 })
                .type('<span class="bold-tag">Magic</span>')
                .pause(2800)
                .delete(5, { delay: 60 })
                .type('<span class="bold-tag">Calm</span>')
                .pause(2800)
                .delete(4, { delay: 60 })
                .type('<span class="bold-tag">Happiness</span>');
              return instance;
            }}
            options={{
              speed: 109,
              waitUntilVisible: true,
              html: true,
            }}
          />
        </h2>
        <div id="to-menu-wrpper">
          <div id="to-menu" onClick={handleScroll} style={{ cursor: 'pointer' }}>
            <CaretDoubleDown weight="duotone" size={24} style={{ verticalAlign: 'middle', display: 'inline' }} />
            <span>اسکرول به منو</span>
          </div>
        </div>
      </div>
      <ul id="header-navbar">
        <li>
          <a href="https://www.instagram.com/arqhavancafe/" target="_blank" rel="noopener noreferrer">
            اینستاگرام <InstagramLogo weight="bold" size={22} style={{ verticalAlign: 'middle', display: 'inline' }} />
          </a>
        </li>
        <li>
          <a href="https://open.spotify.com/user/31hqf2z7ocv5iuukecolu4j5izbq" target="_blank" rel="noopener noreferrer">
            اسپاتیفای <SpotifyLogo weight="bold" size={22} style={{ verticalAlign: 'middle', display: 'inline' }} />
          </a>
        </li>
        <li>
          <a href="https://x.com/arqhavancafe" target="_blank" rel="noopener noreferrer">
            ایکس <XLogo weight="bold" size={22} style={{ verticalAlign: 'middle', display: 'inline' }} />
          </a>
        </li>
        <li>
          <a href="http://t.me/arqhavancafe" target="_blank" rel="noopener noreferrer">
            تلگرام <TelegramLogo weight="bold" size={22} style={{ verticalAlign: 'middle', display: 'inline' }} />
          </a>
        </li>
        <li>
          <a href="https://wa.me/989141472408" target="_blank" rel="noopener noreferrer">
            واتساپ <WhatsappLogo weight="bold" size={22} style={{ verticalAlign: 'middle', display: 'inline' }} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default HeaderSection;
