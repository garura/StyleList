import React from 'react'

export default class ArticleListItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {item: props.item,
                  clicked: props.onClick}
    this._clicked = this._clicked.bind(this)
  }

  componentWillReceiveProps(newProps) {
    this.setState({item: newProps.item,
                  clicked: newProps.onClick})
  }

  _clicked(event) {
    event.preventDefault();
    this.state.clicked();
    // change my class to toggle my background color
  }

  render() {
    return (
      <div onClick={this._clicked}className="article-list-item">
        Title: {this.state.item.title}
      </div>
    )
  }
}
