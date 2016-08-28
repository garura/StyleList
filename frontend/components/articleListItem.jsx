import React from 'react'

export default class ArticleListItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {item: props.item}
  }

  componentWillReceiveProps(newProps) {
    this.setState({item: newProps.item})
  }

  render() {
    return (
      <div className="article-list-item">
        {this.state.item.title}
      </div>
    )
  }
}
