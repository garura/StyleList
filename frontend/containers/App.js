import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import { fetchArticles } from '../actions/articles'

const store = configureStore()

class App extends Component {
  render() {
    window.store = store
    window.fetchArticles = fetchArticles
    // store.dispatch(fetchArticles())
    return (
      <Provider store={store}>
        <p>hello world :)</p>
      </Provider>
    )
  }
}

export default App
