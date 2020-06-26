import React from 'react';
import * as Icon from 'react-feather';
import {useTranslation} from 'react-i18next';

function Footer(props) {
  const {t} = useTranslation();

  return (
    <footer className="fadeInUp" style={{animationDelay: '2s'}}>
      <h5>{t('Lets stand with everyone fighting on the frontlines')}</h5>

      <div className="link">
        <a
          href="https://www.linkedin.com/in/mudasir-afzal-61824678/"
          target="_blank"
          rel="noopener noreferrer"
        >
          by Mudasir Afzal
        </a>
      </div>

     
    </footer>
  );
}

export default React.memo(Footer);
