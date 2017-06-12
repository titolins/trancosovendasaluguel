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
        features: "mais informações",
        controls: {
          prev: "anterior",
          next: "próxima"
        }
      },
      "EN_US": {
        people: "people",
        description: "description",
        capacity: "capacity",
        features: "features",
        controls: {
          prev: "previous",
          next: "next"
        }
      }},
    contact: {
      "PT_BR": {
        phone: "telefone",
        address: "endereço"
      },
      "EN_US": {
        phone: "phone",
        address: "address"
      }
    },
    services: {
      "PT_BR": {
        title: "serviços",
        types: {
          title: "nós oferecemos os seguintes serviços exclusivos para nossos clientes:",
          services: [
            "Táxis",
            "Aluguel de carros e motos",
            "Funcionários em geral",
            "Administração de imóveis",
            "Passeios de barco e cavalo",
            "Aulas de capoeira, lambada, surf e pilates" ]},
        arrival: {
          car: {
            title: "Como chegar a Trancoso de carro",
            text: `O principal acesso a Trancoso é pela BR 101. No km 772, Eunápolis-BA,
              você deve seguir pela BR-367 até o km 33 desta rodovia e mais 47km até Trancoso.`
          },
          plane: {
            title: "Como chegar a Trancoso de Avião",
            text: `Você irá chegar no Aeroporto Internacional de Porto Seguro. De Porto Seguro, pegue a balsa
              para Arraial D'Ajuda (funciona 24 horas e leva por volta de 10 minutos para atravessar). De
              Arraial D'Ajuda são 26km's até Trancoso em estrada asfaltada.`
          },
          bus: {
            title: "Como chegar a Trancoso de Ônibus",
            text: "Diversas linhas de ônibus e vans partem da estrada da balsa (Arraial D'Ajuda) para Trancoso."
          }
        },
        distances: {
          title: "Distâncias das principais capitais",
          capitals: [
            "São Paulo: 1528km",
            "Rio de Janeiro: 1229km",
            "Belo Horizonte: 938km",
            "Porto Alegre: 2785km",
            "Salvador: 610km",
            "Brasília: 1421km" ] },
        location: {
          title: "Dados GPS",
          coordinates: [
            "Latitude: 16º26'59",
            "Longitude: 39º03'53" ]}},
      "EN_US": {
        title: "services",
        types: {
          title: "We also offer the following exclusive services to our clients",
          services: [
            "taxis",
            "rental cars and motorbikes",
            "employess in general",
            "administration of houses",
            "boat and horse tours",
            "Classes of: capoeira, lambada, surf and pilates"
          ]
        },
        arrival: {
          car: {
            title: "How to arrive at Trancoso by car",
            text: `The main access to Trancoso is through BR 101. At km 772, Eunápolis-BA, you should
              follow by BR-367 until it's km 33 and then 47km more to Trancoso.`
          },
          plane: {
            title: "How to arrive at Trancoso by plane",
            text: `You will arrive at Porto Seguro International Airport. Since Porto Seguro, take the
              ferry to Arraial D'Ajuda (works 24 hours and takes around 10 minutes to cross). From Arraial
              D'Ajuda are 26 km to Trancoso in a paved road.`
          },
          bus: {
            title: "How to arrive at Trancoso by bus",
            text: "There are several bus and vans departing every hour from Arraial D'Ajuda (at the ferry road) to Trancoso."
          }
        },
        distances: {
          title: "Distances to the main brazilian capitals",
          capitals: [
            "São Paulo: 1528km",
            "Rio de Janeiro: 1229km",
            "Belo Horizonte: 938km",
            "Porto Alegre: 2785km",
            "Salvador: 610km",
            "Brasília: 1421km" ] },
        location: {
          title: "GPS Data",
          coordinates: [
            "Latitude: 16º26'59",
            "Longitude: 39º03'53" ]}}}},
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

