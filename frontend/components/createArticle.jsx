import React from 'react'
import linkState from 'react-link-state'
import ApiUtil from '../util/apiUtil'

let formalityKey = {
  1: "Ultra Casual",
  2: "Casual",
  3: "Business Casual",
  4: "Semi-formal",
  5: "Formal"
}

export default class createArticle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articleType: "",
      title: "",
      description: "",
      brand: "",
      color: "",
      formality: 3,
      rain: false,
      clouds: false,
      snow: false,
      wind: false,
      min: 1,
      max: 5
    }
    this._changeInputType = this._changeInputType.bind(this);
    this._changeInputTitle = this._changeInputTitle.bind(this);
    this._changeInputColor = this._changeInputColor.bind(this);
    this._changeInputFormality = this._changeInputFormality.bind(this);
    this._changeInputWeatherMin = this._changeInputWeatherMin.bind(this);
    this._changeInputWeatherMax = this._changeInputWeatherMax.bind(this);
    this._changeInputWeatherTypes = this._changeInputWeatherTypes.bind(this);
    this._saveItem = this._saveItem.bind(this);
  }

  _saveItem(event){
    event.preventDefault();
    let item = { article: {
      article_type: this.state.articleType,
      title: this.state.title,
      description: this.state.description,
      brand: this.state.brand,
      color: this.state.color,
      formality: this.state.formality,
      temp_min: this.state.min,
      temp_max: this.state.max,
      rain: this.state.rain,
      wind: this.state.wind,
      clouds: this.state.clouds,
      snow: this.state.snow
    }}

    ApiUtil.saveArticle(item);

  }

  _changeInputType(event) {
    event.preventDefault();
    let choice = event.target.value
    this.setState({articleType: choice})
  }
  _changeInputTitle(event) {
    event.preventDefault();
    let choice = event.target.value
    this.setState({title: choice})
  }
  _changeInputColor(event) {
    event.preventDefault();
    let choice = event.target.value
    this.setState({color: choice})
  }
  _changeInputFormality(event) {
    event.preventDefault();
    let choice = parseInt(event.target.value)
    this.setState({formality: choice})
  }
  _changeInputWeatherMin(event) {
    event.preventDefault();
    let choice = parseInt(event.target.value)
    let max = this.state.max
    if (max >= choice){
      this.setState({min: choice})
    } else {
      event.target.value = max
      this.setState({min: max})
    }
  }
  _changeInputWeatherMax(event) {
    event.preventDefault();
    let choice = parseInt(event.target.value)
    let min = this.state.min
    if (min <= choice) {
      this.setState({max: choice})
    } else {
      event.target.value = min
      this.setState({max: min})
    }
  }

  _changeInputWeatherTypes(event) {
    event.preventDefault();
    let tar = event.target.innerText.toLowerCase();
    let old_choice = this.state[tar];
    let new_choice = !old_choice
    this.setState({[tar]: new_choice})

  }

  render() {
    return (
      <div className="create-article-index">
        <p className="create-article-title">ADD ARTICLE</p>
        <div className="create-article-list">
          <label>
            <p>CATEGORY</p>
          <select onChange={this._changeInputType}>
            <option value="tops">Tops</option>
            <option value="bottoms">Bottoms</option>
            <option value="dresses">Dresses</option>
            <option value="outerwear">Outerwear</option>
            <option value="shoes">Shoes</option>
            <option value="misc">Miscellaneous</option>
          </select>
        </label>
          <label>
            <p>TITLE</p>
            <input onChange={this._changeInputTitle} type="text" placeholder="Ex. Warm Cashmere Sweater"/>
          </label>
          <label>
            <p>DESCRIPTION</p>

              <textarea id="description" placeholder="write some notes about your item"/>

          </label>
          <label>
            <p>BRAND</p>
            <input type="text" placeholder="Ex. Free People"/>
          </label>
          <label>
            <p>COLOR</p>
          <select onChange={this._changeInputColor}>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
          </select>
        </label>
        <label>
          <p>FORMALITY</p>
          <select onChange={this._changeInputFormality}>
            <option value={1}>Ultra Casual</option>
            <option value={2}>Casual</option>
            <option value={3}>Business Casual</option>
            <option value={4}>Semi-formal</option>
            <option value={5}>Formal</option>
          </select>
        </label>
        <label>
          <p>WEARABLE IN</p>
          <div className="wearable-buttons">
            <button onClick={this._changeInputWeatherTypes}>Rain</button>
            <button onClick={this._changeInputWeatherTypes}>Wind</button>
            <button onClick={this._changeInputWeatherTypes}>Snow</button>
            <button onClick={this._changeInputWeatherTypes}>Clouds</button>
          </div>
        </label>
        <label className="temp-select" >
          <p>FROM TEMPERATURE RANGES FROM</p>
          <select onChange={this._changeInputWeatherMin} defaultValue={this.state.min}>
            <option value={1}>Freezing</option>
            <option value={2}>Cold</option>
            <option value={3}>Chilly</option>
            <option value={4}>Warm</option>
            <option value={5}>Hot</option>
          </select>
          <p>TO</p>
          <select onChange={this._changeInputWeatherMax} defaultValue={this.state.max}>
            <option value={1}>Freezing</option>
            <option value={2}>Cold</option>
            <option value={3}>Chilly</option>
            <option value={4}>Warm</option>
            <option value={5}>Hot</option>
          </select>
        </label>
        <label>
          <p><button>UPLOAD A PHOTO</button></p>
        </label>
        <button onClick={this._saveItem} className="submit">Save Item</button>
        </div>
      </div>
    )
  }
}
