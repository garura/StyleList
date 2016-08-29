import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router'
import App from './components/app'
import ArticlesIndex from './components/articlesIndex'
import OutfitsIndex from './components/outfitsIndex'
import CreateArticle from './components/createArticle'

let routes = (
  <Route path='/' component={App}>
    <Route path='/articles' component={ArticlesIndex}/>
    <Route path='/outfits' component={OutfitsIndex}/>
    <Route path='/newarticle' component={CreateArticle}/>
  </Route>
)

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById('content')) {
    render(
      <Router history={hashHistory}>{routes}</Router>, document.getElementById('content')
      )
  }
});
