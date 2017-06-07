import React from 'react';
import { PropTypes } from 'react';

//import { activeLanguage } from './styles';

export default ({ active, lang, margins, onClick }) => {
  //let activeClass = active ? "active" : undefined;
  let classes = `nav-link text-grey px-0 ml-${margins[0]} mr-${margins[1]}`

  return (
      <span><a className={classes} href="#" onClick={e => {
        e.preventDefault();
        onClick();
      }}
      >{ lang }</a></span>
  )
}


