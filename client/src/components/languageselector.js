import React from 'react';

import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from 'client/containers/languageselector'


const LanguageSelector = ({ active, lang, margins, onClick }) => {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageSelector)
