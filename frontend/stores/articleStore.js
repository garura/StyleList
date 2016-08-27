import AppDispatcher from '../dispatcher/dispatcher'
import { Store } from 'flux/utils'

let _articles = {
  tops: {},
  bottoms: {},
  outerwear: {},
  dresses: {},
  shoes: {},
  misc: {}
}

const articleStore = new Store(AppDispatcher)

articleStore.getArticles = () => {
  return _articles;
}

articleStore.filterArticles = (filtertype, applied) => {
  return [1,4,8];
}

let resetArticles = (articles) => {
  _articles = articles.articles
}
articleStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case 'RECEIVE_ARTICLES':
      resetArticles(payload.articles)
      articleStore.__emitChange()
      break;
    default:
      return;
  }
}
export default articleStore
