import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById('content')) {
    render(
      <App/>, document.getElementById('content')
      )
  }
});
