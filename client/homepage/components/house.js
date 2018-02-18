import React from 'react'

import { connect } from 'react-redux'

import { mapDispatchToProps } from 'homepage/containers/fetchcontent'
import { mapStateToProps } from 'homepage/containers/house'

import Carousel from 'homepage/components/carousel'
import Message from 'homepage/components/message'

const buildFeatures = (features) => {
  return (<ul>{features.map((f,i) => {return (<li key={i}>{f}</li>)})}</ul>)
}

class House extends React.Component {
  componentWillMount() {
    let { categoryId, houseId } = this.props.match.params
    let url = `/api/categorias/${categoryId}/casas/${houseId}`
    this.props.fetchContent(url)
  }

  render() {
    let { ownContent, staticContent } = this.props,
        carousel = ownContent.pictures ? (<Carousel pictures={ownContent.pictures} controls={staticContent.controls} />) : null,
        features = JSON.parse(JSON.stringify(ownContent.features)) || []

    switch(this.props.match.params.categoryId) {
      case 'vendas':
      case 'sales':
        if (ownContent.salesFeatures) features.push(ownContent.salesFeatures)
        break;
      case 'aluguel':
      case 'rent':
        if (ownContent.rentFeatures) features.push(ownContent.rentFeatures)
        break;
    }
    let featuresList = buildFeatures(features)

    return (
      <div className="container mainContent">
        <div id="messageModal" className="modal modal-fade" tabIndex="-1" aria-hidden="true" role="dialog" aria-labelledby="messageModalTitle">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="messageModalTitle">Enviar mensagem</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Message houseName={ownContent ? ownContent.name : ''} />
              </div>
            </div>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-xs-12 col-md-6 houseCarousel">
            { carousel }
          </div>
          <div className="col-xs-12 col-md-6">
            <h1 className="sectionTitle fullWidth pb-2">{ staticContent.description }</h1>
            <p>{ ownContent.description }</p>
            { this.props.match.params.categoryId === 'rent' ? (<div>
              <h1 className="sectionTitle fullWidth pb-2">{ staticContent.capacity }</h1>
              <p>{ ownContent.capacity }</p></div>) : '' }
            <h1 className="sectionTitle fullWidth pb-2">{ staticContent.features }</h1>
            { featuresList }
            <a href="#" className="btn moreBtn" data-target="#messageModal" data-toggle="modal">
              <span className="fa fa-envelope-open-o"></span> Enviar mensagem
            </a>
          </div>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(House)
