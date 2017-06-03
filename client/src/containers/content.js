export const Languages = {
  PT: 'PT_BR',
  EN: 'EN_US'
}

export const Content = {
  PT_BR: {
    mainContent: {
      test: 'teste'
    },
    header: {
      about: 'sobre trancoso',
      contact: 'contato',
      sales: {
        title: 'vendas',
        items: [] },
      rent: {
        title: 'aluguel',
        items: [] },
      comercialRent: 'aluguel comercial',
      services: 'serviços'
    }

  },
  EN_US: {
    mainContent: {
      test: 'test'
    },
    header: {
      about: 'about trancoso',
      contact: 'contact',
      sales: {
        title: 'sales',
        items: [] },
      rent: {
        title: 'rent',
        items: [] },
      comercialRent: 'comercial rent',
      services: 'services'
    }
  }
}

const getContent = (lang, contentId) => {
  return Content[lang][contentId];
}

export const mapStateToProps = (state, ownProps) => {
  return {
    content: getContent(state.lang.selected, ownProps.contentId)
  }
}

