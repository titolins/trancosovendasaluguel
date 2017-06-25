import React from 'react'

export default class Intro extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">Bem-vindo ao Painel de Administração</h4>
          <p className="card-text">Através do menu acima você poderá administrar o conteúdo do site, adicionando e editando novas casas e imagens, ou apenas visualizando-os.</p>
        </div>
      </div>
    )
  }
}

