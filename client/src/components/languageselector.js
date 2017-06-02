import React from 'react';
import { PropTypes } from 'react';

//import { activeLanguage } from './styles';

let LanguageSelector = ({ active, lang, onClick }) => {
  let activeClass = active ? "activeLanguage" : undefined;

  return (
      <span><a className={activeClass} href="#" onClick={e => {
        e.preventDefault();
        onClick();
      }}
      ><h5>{ lang }</h5></a></span>
  )
}


export default LanguageSelector
