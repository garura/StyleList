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

let invalidWeather = (weather, item) => {
  if (weather.rain === true && item.rain === false) {
    return true;
  }
  if (weather.clouds === true && item.clouds === false) {
    return true;
  }
  if (weather.snow === true && item.snow === false) {
    return true;
  }
  if (weather.wind === true && item.wind === false) {
    return true;
  }
  if (weather.temp < item.temp_min || weather.temp > item.temp_max) {
    return true;
  }
  return false;
}

articleStore.filterArticles = (filtertype, applied, weather, color, formality) => {
  let articleSet = _articles[filtertype];
  let ids = articleSet.ids
  let matches = [];
  ids.forEach((id) => {
    let item = articleSet[id]
    // check if using weather
    if (applied.weather === true && invalidWeather(weather, item)) {
      return;
    }
    // check if using color
    if (applied.colors === true && color[item.color] === false) {
      return;
    }
    // check if using formality
    if (applied.formality === true && item.formality !== formality) {
      return;
    }

    matches.push(id);
  })
  return matches;
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
