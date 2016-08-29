import React from 'react'
import linkState from 'react-link-state'

export default class createArticle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      brand: "",
      color: " "
    }
    this._toggleCheckedColor = this._toggleCheckedColor.bind(this);
    this._toggleDropdown = this._toggleDropdown.bind(this);
  }
  _toggleDropdown(event) {
    event.preventDefault();
    let tar = $('#dropdown');
    tar.toggleClass('show');

  }
  _toggleCheckedColor(event) {
    event.preventDefault()
      let tar = $(event.currentTarget);
      let color = tar.innerText;
      tar.toggleClass('unchecked');
      this.setState({color: color});
  }
  colorElements() {
    let colorChoices = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown","white", "grey", "black", "denim", "patterned"]
    let checkboxes = colorChoices.map((color, index) => {
      return (
        <label key={index} onClick={this._toggleCheckedColor} className={"color-checkbox " + color +" unchecked"}><span></span>{color}</label>
      )
    })
    return (
      <div className='filter-colors'>
        <p className='filter-title'>Colors</p>
        {checkboxes}
      </div>
    )
  }
  render() {
    return (
      <div className="create-article-index">
        <div className="create-article-list">
          <label onClick={this._toggleDropdown}>Article Type:
            <ul className="dropdown-content" id="dropdown">
              <li>"Tops"</li>
              <li>"Bottoms"</li>
              <li>"Outerwear"</li>
              <li>"Dresses"</li>
              <li>"Shoes"</li>
              <li>"Miscellaneous"</li>
            </ul>
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
          {this.colorElements()}
        </div>
      </div>
    )
  }
}
