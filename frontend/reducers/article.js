const initialState = {
  isFetching: false,
  tops: {"hi": 2},
  bottoms: {},
  outerwear: {},
  dresses: {},
  shoes: {},
  misc: {}
}

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_ARTICLES':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'RECEIVE_ARTICLES':
      return Object.assign({}, state, {
        isFetching: false,
        tops: action.tops,
        bottoms: action.bottoms,
        outerwear: action.outerwear,
        dresses: action.dresses,
        shoes: action.shoes,
        misc: action.misc
      })
    default:
      return state
  }
}



export default articlesReducer
