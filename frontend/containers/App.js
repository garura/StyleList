import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import { fetchArticles, receiveArticles } from '../actions/articles'

const store = configureStore()

class App extends Component {
  render() {
    window.store = store
    window.fetchArticles = fetchArticles
    $.ajax({
      url: "api/articles",
      method: "GET",
      success: function(articles) {
        console.log("good");
        store.dispatch(receiveArticles(articles))
      },
      error: function(error) {
        console.log("bad");
      }
    })
    // fetchArticles(store.dispatch)
      // ^ this is not passing our auth (current_user returning nil)
      // my guess is no access to session[:session_token] (failing auth_token thing)
      // solution approach: find redux auth_token gem/solution online
    return (
      <Provider store={store}>
        <p>hello world :)</p>
      </Provider>
    )
  }
}

export default App
