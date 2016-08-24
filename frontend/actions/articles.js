// import fetch from 'isomorphic-fetch'

export const addArticles = (articles) => {
  return {
    type: "ADD_ARTICLES",
    articles
  }
}

export const addArticle = (article) => {
  return {
    type: "ADD_ARTICLE",
    article
  }
}

export const updateArticle = (article) => {
  return {
    type: "UPDATE_ARTICLE",
    article
  }
}



export const requestArticles = () => {
  return {
    type: "REQUEST_ARTICLES"
  }
}

export const receiveArticles = (data) => {
  return {
    type: "RECEIVE_ARTICLES",
    data
  }
}

// const headers = new Headers ({
//   "X-Custom-Header": "session-cookie"
// })
// const init = {
//   headers: headers
// }
export function fetchArticles(headers) {
  return function (dispatch) {
    dispatch(requestArticles)
    return fetch('api/articles', headers)
    // .then(articles => dispatch(receiveArticles(articles)))
  }
}
