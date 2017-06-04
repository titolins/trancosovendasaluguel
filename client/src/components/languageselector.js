import React from 'react';
import { PropTypes } from 'react';

//import { activeLanguage } from './styles';

export default ({ active, lang, onClick }) => {
  //let activeClass = active ? "active" : undefined;

  return (
      <span><a className="nav-link" href="#" onClick={e => {
        e.preventDefault();
        onClick();
      }}
      >{ lang }</a></span>
  )
}


