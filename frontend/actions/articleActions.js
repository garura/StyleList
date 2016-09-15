import AppDispatcher from '../dispatcher/dispatcher'

const ArticleActions = {
  receiveArticles: (articles) => {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_ARTICLES",
      articles
    });
  },
  receiveArticle: (article) => {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_ARTICLE",
      article
    });
  },

}
export default ArticleActions
