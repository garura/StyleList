import React from 'react'
import linkState from 'react-link-state'

export default class createArticle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articleType: "",
      title: "",
      description: "",
      brand: "",
      color: " "
    }
    this._toggleDropdownType = this._toggleDropdownType.bind(this);
    this._toggleDropdownColor = this._toggleDropdownColor.bind(this);
    this._changeInputType = this._changeInputType.bind(this);
    this._changeInputColor = this._changeInputColor.bind(this);
  }
  _toggleDropdownType(event) {
    event.preventDefault();
    let tar = $('#dropdown-type');
    tar.toggleClass('show');
  }
  _toggleDropdownColor(event) {
    event.preventDefault();
    let tar = $('#dropdown-color');
    tar.toggleClass('show');
  }
  _changeInputType(event) {
    event.preventDefault();
    let choice = event.target.value
    this.setState({articleType: choice})
  }
  _changeInputColor(event) {
    event.preventDefault();
    let choice = event.target.value
    this.setState({color: choice})
  }

  render() {
    console.log(this.state);
    return (
      <div className="create-article-index">
        <div className="create-article-list">
          <label>Category:
          <select onChange={this._changeInputType}>
            <option value="tops">Tops</option>
            <option value="bottoms">Bottoms</option>
            <option value="dresses">Dresses</option>
            <option value="outerwear">Outerwear</option>
            <option value="shoes">Shoes</option>
            <option value="misc">Miscellaneous</option>
          </select>
        </label>
          <label>Title
            <input type="text" valueLink={linkState(this,'title')}/>
          </label>
          <label>Description
            <input type="text" valueLink={linkState(this,'description')}/>
          </label>
          <label>Brand
            <input type="text" valueLink={linkState(this,'brand')}/>
          </label>
          <label>Color:
          <select onChange={this._changeInputColor}>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
          </select>
        </label>
        </div>
      </div>
    )
  }
}
