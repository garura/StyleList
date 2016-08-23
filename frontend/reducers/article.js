const initialState = {
  isFetching: false,
  tops: {},
  bottoms: {},
  outerwear: {},
  dresses: {},
  shoes: {},
  misc: {}
}

const articles = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_ARTICLES':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'RECEIVE_ARTICLES':
      return Object.assign({}, state, {
        isFetching: false,
        tops: action.data.articles.tops,
        bottoms: action.data.articles.bottoms,
        outerwear: action.data.articles.outerwear,
        dresses: action.data.articles.dresses,
        shoes: action.data.articles.shoes,
        misc: action.data.articles.misc
      })
    default:
      return state
  }
}



export default articles
