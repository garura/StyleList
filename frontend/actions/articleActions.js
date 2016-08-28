import AppDispatcher from '../dispatcher/dispatcher'

const ArticleActions = {
  receiveArticles: (articles) => {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_ARTICLES",
      articles
    });
  }
}
export default ArticleActions
