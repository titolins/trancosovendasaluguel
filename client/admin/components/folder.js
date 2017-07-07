import React from 'react'

import octicons from 'octicons'

export default class Folder extends React.Component {
  render() {
    return (
      <div className="card card-block card-inverse card-info text-center">
        <a href="" className="triggerCollapse" onClick={this.props.handleClick} data-trigger={this.props.target} dangerouslySetInnerHTML={{__html:octicons['file-directory'].toSVG({ width: 80}) }} />
      </div>
    )
  }
}
