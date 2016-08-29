import React from 'react'
import linkState from 'react-link-state'
import ArticleStore from '../stores/articleStore'
import FilteredType from './filteredType'

let weatherKey = {
  1: "Freezing",
  2: "Cold",
  3: "Chilly",
  4: "Warm",
  5: "Hot"
}

let formalityKey = {
  1: "Ultra Casual",
  2: "Casual",
  3: "Business Casual",
  4: "Semi-formal",
  5: "Formal"
}

export default class TypeFilter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      type: props.type,
      displayed: props.displayed,
      applied: {
        weather: false,
        colors: false,
        formality: false
      },
      weather: {
        rain: false,
        snow: false,
        wind: false,
        clouds: false,
        temp: 3
      },
      color: {
        red: false,
        orange: false,
        yellow: false,
        green: false,
        blue: false,
        purple: false,
        black: false,
        grey: false,
        denim: false,
        pink: false,
        white: false,
        brown: false,
        patterned: false
      },
      formality: 2,
      filteredIds: props.displayed,
      showing: true
    }
    this._applyFilter = this._applyFilter.bind(this);
    this._updateFilter = this._updateFilter.bind(this);
    this._toggleHidden = this._toggleHidden.bind(this);
    this._toggleCheckedColor = this._toggleCheckedColor.bind(this);
    this._updateFormality = this._updateFormality.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({displayed: newProps.displayed,
      filteredIds: newProps.displayed})
  }

  weatherElements() {
    return (
      <div className='filter-weather unselected'>
        <p className='filter-title' onClick={this._applyFilter}>Weather</p>
        <div className="weather-input">
          <p className='filter-selection'>{weatherKey[this.state.weather.temp]}</p>
          <p>&#10052;</p>
          <input type="range" min={1} max={5} defaultValue={3} onChange={this._applyFilter}/>
          <p>&#9728;</p>
        </div>

        <div className='weather-buttons'>
          <button className={this.state.weather.rain ? "checked" : ""} onClick={this._applyFilter}>Rain</button>
          <button className={this.state.weather.clouds ? "checked" : ""} onClick={this._applyFilter}>Clouds</button>
          <button className={this.state.weather.wind ? "checked" : ""} onClick={this._applyFilter}>Wind</button>
          <button className={this.state.weather.snow ? "checked" : ""} onClick={this._applyFilter}>Snow</button>
        </div>
      </div>
    )
  }

  _updateFormality(event) {
    event.preventDefault();
    // event.stopPropagation();
    if (this.state.applied.formality) {
      let tar = $(event.currentTarget);
      tar.siblings().each((index, button) => {
        button.className = "";
      });
      tar.addClass('checked');
      this.setState({formality: parseInt(tar.attr("data"))})
    }
  }

  formalityElements() {
    return (
      <div className='filter-formality unselected'>
        <p className='filter-title' onClick={this._applyFilter}>Formality</p>
        <p className='filter-selection'>{formalityKey[this.state.formality]}</p>
        <div className="formality-buttons">
          <button data={1} onClick={this._updateFormality}>Ultra Casual</button>
          <button data={2} onClick={this._updateFormality}>Casual</button>
          <button data={3} onClick={this._updateFormality}>Business Casual</button>
          <button data={4} onClick={this._updateFormality}>Semi-formal</button>
          <button data={5} onClick={this._updateFormality}>Formal</button>
        </div>
      </div>
    )
  }

  _toggleCheckedColor(event) {
    event.preventDefault()
    event.stopPropagation()
    if (this.state.applied.colors) {
      let tar = $(event.currentTarget);
      let color = this.state.color
      color[tar.text()] = !color[tar.text()]
      tar.toggleClass('unchecked');
      this.setState({color: color});
    }
  }

  colorElements() {
    let colorChoices = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown","white", "grey", "black", "denim", "patterned"]
    let checkboxes = colorChoices.map((color, index) => {
      return (
        <label key={index} onClick={this._toggleCheckedColor} className={"color-checkbox " + color +" unchecked"}><span></span>{color}</label>
      )
    })
    return (
      <div className='filter-colors unselected'>
        <p className='filter-title' onClick={this._applyFilter}>Colors</p>
        {checkboxes}
      </div>
    )
  }

  _applyFilter(event) {
    event.preventDefault()
    event.stopPropagation()
    let newValue;
    let propName;

    switch (event.target.innerText) {
      case 'Weather':
      case 'Formality':
      case 'Colors':
        $(event.currentTarget).parent().toggleClass('unselected');
        newValue = this.state.applied;
        propName = event.target.innerText.toLowerCase();
        newValue[propName] = !newValue[propName];
        this.setState({applied: newValue})
        break;
      case 'Rain':
      case 'Clouds':
      case 'Snow':
      case 'Wind':
        if (this.state.applied.weather) {
          newValue = this.state.weather;
          propName = event.target.innerText.toLowerCase();
          newValue[propName] = !newValue[propName];
          this.setState({weather: newValue})
        }
        break;
    }
    if (event.target.value) {
      newValue = this.state.weather;
      newValue["temp"] = parseInt(event.target.value)
      this.setState({weather: newValue})
    }
  }
  _updateFilter(event) {
    event.preventDefault();
    event.stopPropagation()
    let filtertype = this.state.type.toLowerCase();
    let applied = this.state.applied;
    let weather = this.state.weather;
    let color = this.state.color;
    let formality = this.state.formality;
    let filteredIds = ArticleStore.filterArticles(filtertype, applied, weather, color, formality);
    this.setState({filteredIds: filteredIds});
  }
  _toggleHidden(event) {
    event.preventDefault();
    // event.stopPropagation()
    $('.filter-options.' + this.state.type).toggleClass('isHidden');
    $('.viewable-articles.' + this.state.type).toggleClass('isHidden');
    $('.filter-apply.' + this.state.type).toggleClass('isHidden');
    debugger;
    let show = !this.state.showing
    this.setState({showing: show})
  }

  render() {
    let showText = this.state.showing === true ? "Hide" : "Show";
    return (
      <div className='type-filter'>
        <div className="filter-header">
          <p>{this.state.type} ({this.state.displayed.length})</p>
          <button onClick={this._updateFilter} className={'filter-apply ' + this.state.type} >Apply Filters</button>
          <button className='show-button' onClick={this._toggleHidden}>{showText}</button>
        </div>
        <div className={"filter-options " + this.state.type}>
          {this.weatherElements()}
          {this.formalityElements()}
          {this.colorElements()}
        </div>
        <FilteredType type={this.state.type} ids={this.state.filteredIds}/>
      </div>
    )
  }
}

//<input type="checkbox" checkedLink={linkState(this, 'color.white')}/>
