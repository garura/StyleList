import React from 'react'

export default class ArticleDetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      info: props.info
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({info: newProps.info})
  }

  render() {
    return (
      <div className="article-detail">
        <img src='https://squareup.com/apple-touch-icon-152x152.png'/>
        <p>Title: {this.state.info.title}</p>
        <p>Notes: {this.state.info.description}</p>
      </div>
    )
  }
}
