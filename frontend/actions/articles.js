import fetch from 'isomorphic-fetch'

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

export const receiveArticles = (articles) => {
  return {
    type: "RECEIVE_ARTICLES",
    articles
  }
}

export function fetchArticles() {
  return function (dispatch) {
    dispatch(requestArticles)
    return fetch('http://localhost:3000/api/articles')
      .then(articles => dispatch(receiveArticles(articles)))
  }
}
