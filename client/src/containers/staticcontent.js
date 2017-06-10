export const Languages = {
  PT: 'PT_BR',
  EN: 'EN_US'
}

export const Content = {
  static: {
    navbar: {
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
    home: {
      "PT_BR": {
        welcomeText: [ `Verdes-mares, águas tépidas, altivas falésias, coqueirais, matas,
            mangues e rios.`,
                       `Bem vindo às paradisíacas praias do extremo sul da Bahia,
            com suas paisagens e miragens que se estendem por 90km de costa e desenham o
            exuberante cenário da Mata Atlântica nessa região - visões do paraíso que ainda
            se mantém vivas aqui.`,
                       `Somos corretores imobiliários com ampla experiência
            na região desde 2002 e hoje contamos com os melhores preços da praça.`]
      },
      "EN_US": {
        welcomeText: [ `Green seas, tepid waters, high cliffs, coconut groves, woods,
            mangroves and rivers.`,
                       `Welcome to the paradisiac beaches of the extreme
            south of Bahia, with it's landscapes and mirages that extend for 90km of
            coast and draw the exuberant scenario of the Atlantic Forest in this
            region - visions of the paradise that exists here until today.`,
                       `We are real estate brokers with broad experience in the region since
            2002 and counting today with the best prices in the area.` ] }},
    featured: {
      "PT_BR": {
        moreBtn: "ver mais",
        detailsBtn: "mais detalhes" },
      "EN_US": {
        moreBtn: "see more",
        detailsBtn: "more details" }},
    house: {
      "PT_BR": {
        people: "pessoas",
        description: "descrição",
        capacity: "capacidade",
        features: "mais informações"
      },
      "EN_US": {
        people: "people",
        description: "description",
        capacity: "capacity",
        features: "features"
      }}},
  dinamic: null
}

const getStaticContent = (content, lang, contentId) => {
  return content.static[contentId][lang];
}

export const mapStateToProps = (state, ownProps) => {
  return {
    ownContent: getStaticContent(state.content, state.lang.selected, ownProps.contentId)
  }
}

