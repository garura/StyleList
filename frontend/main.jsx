import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router'
import App from './components/app'
import Articles from './components/articles'

let routes = (
  <Route path='/' component={App}>
    <Route path='/articles' component={Articles}/>
  </Route>
)

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById('content')) {
    render(
      <Router history={hashHistory}>{routes}</Router>, document.getElementById('content')
      )
  }
});
