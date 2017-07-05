import React from 'react';

import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from 'homepage/containers/languageselector'


const LanguageSelector = ({ active, lang, marginsClass, onClick }) => {
  let activeClass = active ? "active" : undefined;
  let classes = `nav-link text-grey px-0 ${marginsClass} ${activeClass}`

  return (
      <span><a className={classes} href="#" onClick={e => {
        e.preventDefault();
        onClick();
      }}
      >{ lang }</a></span>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageSelector)
