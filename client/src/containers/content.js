export const Languages = {
  PT: 'PT_BR',
  EN: 'EN_US'
}

export const Content = {
  static: {
    header: {
      "PT_BR": {
        about: 'sobre trancoso',
        contact: 'contato',
        sales: 'vendas',
        rent: 'aluguel',
        comercialRent: 'aluguel comercial',
        services: 'serviços'
      },
      "EN_US": {
        about: 'about trancoso',
        contact: 'contact',
        sales: 'sales',
        rent: 'rent',
        comercialRent: 'comercial rent',
        services: 'services' }},
  },
  dinamic: {}
}

const getStaticContent = (lang, contentId) => {
  return Content.static[contentId][lang];
}

const getDinamicContent = (contentId) => {
  return (Content.dinamic[contentId] || null)
}

export const mapStateToProps = (state, ownProps) => {
  let reqContent = {}
  ownProps.requirements.map((req) => {
    reqContent[req] = getDinamicContent(req)
  })
  return {
    ownContent: getStaticContent(state.lang.selected, ownProps.contentId),
    reqContent
  }
}

