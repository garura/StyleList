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
    let description;
    if (this.state.item.description === null) {
      description = "None";
    }
    else if (this.state.item.description.length > 30) {
      description = this.state.item.description.slice(0, 30) + "...";
    }
    else {
      description = this.state.item.description;
    }
    return (
      <div onClick={this._clicked}className="article-list-item">
        <p className='list-item-title'>Title: {this.state.item.title}</p>
        <p className='list-item-worn'>Last Worn: {this.state.item.last_worn || "Unknown"}</p>
        <p className='list-item-description'>Description: {description}</p>
      </div>
    )
  }
}
