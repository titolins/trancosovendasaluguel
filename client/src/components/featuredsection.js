import React from 'react'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import { mapStateToProps } from 'client/containers/category'

const buildItemsPanel = (items, detailsBtnText) => {
  return items.map((item, i) => {
    let fWord = item.content.Description.split(' ')[0],
        rest  = item.content.Description.split(' ').slice(1).join(' ')

    return (
      <div key={i} className="col-xs-12 col-md-6 py-3 housePanel">
        <img className="houseCover" src={item.cover.Url} />
        <div className="mt-4">
          <p className="houseDescription text-blue"><span className="first">{ fWord }</span>{ rest }</p>
        </div>
        <Link to="#">
          <div className="btn houseBtn">
            <span className="fa fa-angle-double-right"></span> { detailsBtnText }
          </div>
        </Link>
      </div>
    )
  })
}

const buildMoreBtn = () => {
  return (
    <div className="row mt-4">
      <Link className="mx-auto" to="#">
        <div className="btn moreBtn">
          <span className="fa fa-plus"></span> { ownContent.moreBtn }
        </div>
      </Link>
    </div>
  )
}

const FeaturedSection = ({title, items, ownContent}) => {
  if (!items) return null

  let moreBtn = (items.length > 2) ? buildMoreBtn : undefined
  let itemsPanel = buildItemsPanel(items, ownContent.detailsBtn)

  return (
    <div>
      <h1 className="featuredCategoryTitle pb-2">{ title }</h1>
      <div className="container py-4">
        <div className="row">{ itemsPanel }</div>
        { moreBtn }
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(FeaturedSection)
