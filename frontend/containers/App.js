import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import { fetchArticles, receiveArticles } from '../actions/articles'

const store = configureStore()

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <p></p>
    )
  }
}

export default App
