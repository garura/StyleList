import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
import App from './components/app'
import ArticlesIndex from './components/articlesIndex'
import OutfitsIndex from './components/outfitsIndex'

let routes = (
  <Route path='/' component={App}>
    <IndexRoute component={ArticlesIndex}/>
    <Route path='/articles' component={ArticlesIndex}/>
    <Route path='/outfits' component={OutfitsIndex}/>
  </Route>
)

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById('content')) {
    render(
      <Router history={hashHistory}>{routes}</Router>, document.getElementById('content')
      )
  }
});
