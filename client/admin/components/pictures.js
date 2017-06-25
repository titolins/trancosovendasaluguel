import React from 'react'

import { connect } from 'react-redux'

import { mapStateToProps, mapDispatchToProps } from 'admin/containers/requests'

class Pictures extends React.Component {
  onEnter() {
    console.log("onenter")
    this.props.fetchContent("/admin/pictures", {})
      .then(res=>console.log(res))
  }

  render() {
    return (
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">Bem-vindo ao Painel de </h4>
          <p className="card-text">Através do menu acima você poderá administrar o conteúdo do site, adicionando e editando novas casas e imagens, ou apenas visualizando-os.</p>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pictures)
