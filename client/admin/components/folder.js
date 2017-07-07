import React from 'react'

import octicons from 'octicons'

export default class Folder extends React.Component {
  render() {
    return (
      <div className="col-sm-6 col-md-4 col-lg-2 text-center">
        <h5 className="folderName">{this.props.folderName}</h5>
        <a href="#" className="triggerCollapse folder" onClick={this.props.handleClick} data-trigger={this.props.target} dangerouslySetInnerHTML={{__html:octicons['file-directory'].toSVG({ width: 80}) }} />
        <a href="#" onClick={this.props.handleDelete} className="btn btn-danger">Remover</a>
      </div>
    )
  }
}
