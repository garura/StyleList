import React from 'react'
import ArticleStore from '../stores/articleStore'
import ApiUtil from '../util/apiUtil'
import TypeFilter from './typeFilter'

export default class ArticlesIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: {
        tops: {
          ids: []
        },
        bottoms: {
          ids: []
        },
        outerwear: {
          ids: []
        },
        dresses: {
          ids: []
        },
        shoes: {
          ids: []
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
    ApiUtil.fetchArticles();
  }
  componentWillUnmount() {
    this.articleToken.remove();
  }

  render() {

    return (
      <div className="articles-index">
        <TypeFilter type="Tops" displayed={this.state.articles.tops.ids}/>
        <TypeFilter type="Bottoms" displayed={this.state.articles.bottoms.ids}/>
        <TypeFilter type="Outerwear" displayed={this.state.articles.outerwear.ids}/>
        <TypeFilter type="Dresses" displayed={this.state.articles.dresses.ids}/>
        <TypeFilter type="Shoes" displayed={this.state.articles.shoes.ids}/>
      </div>
    )
  }
}
