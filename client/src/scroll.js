import React from 'react'

import { withRouter } from 'react-router'

function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }
}


class ScrollToTop extends React.Component {

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0,0)
    }
    hashLinkScroll()
  }

  render() {
    return (
      <div>{ this.props.children }</div>
    )
  }
}

export default withRouter(ScrollToTop)
