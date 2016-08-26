import React from 'react'
import ArticleStore from '../stores/articleStore'
import AppDispatcher from '../dispatcher/dispatcher'

export default class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: {
        tops: {
          count: 0
        }
      }
    };
    this._onChange = this._onChange.bind(this);
  }
  _onChange() {
    this.setState({articles: ArticleStore.getArticles()});
  }
  componentDidMount() {
    this.articleToken = ArticleStore.addListener(this._onChange);
    $.ajax({
      url: 'api/articles',
      method: 'GET',
      success: (response) => {
        AppDispatcher.dispatch({
          actionType: "RECEIVE_ARTICLES",
          articles: response
        });
      },
      error: (response) => {
        debugger;
      }
    })
  }
  render() {
    return (
      <div className="articles-index">{this.state.articles.tops.count}</div>
    )
  }
}
