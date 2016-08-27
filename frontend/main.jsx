import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router'
import App from './components/app'
import ArticlesIndex from './components/articlesIndex'

let routes = (
  <Route path='/' component={App}>
    <Route path='/articles' component={ArticlesIndex}/>
  </Route>
)

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById('content')) {
    render(
      <Router history={hashHistory}>{routes}</Router>, document.getElementById('content')
      )
  }
});
