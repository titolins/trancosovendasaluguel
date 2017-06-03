import React from 'react';
import { PropTypes } from 'react';

//import { activeLanguage } from './styles';

export default ({ active, lang, onClick }) => {
  let activeClass = active ? "active" : undefined;

  return (
      <span><a className={activeClass} href="#" onClick={e => {
        e.preventDefault();
        onClick();
      }}
      ><h5>{ lang }</h5></a></span>
  )
}


