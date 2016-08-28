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
      formality: 3,
      filteredIds: props.displayed,
      showing: true
    }
    this._applyFilter = this._applyFilter.bind(this);
    this._updateFilter = this._updateFilter.bind(this);
    this._toggleHidden = this._toggleHidden.bind(this);
    this._toggleCheckedColor = this._toggleCheckedColor.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({displayed: newProps.displayed,
      filteredIds: newProps.displayed})
  }

  weatherElements() {
    return (
      <div className='filter-weather unselected'>
        <p className='filter-title' onClick={this._applyFilter}>Weather</p>
        <p className='filter-selection'>{weatherKey[this.state.weather.temp]}</p>
        <div className='weather-buttons'>
          <button id='rain' onClick={this._applyFilter}>Rain</button>
          <button onClick={this._applyFilter}>Clouds</button>
          <button onClick={this._applyFilter}>Wind</button>
          <button onClick={this._applyFilter}>Snow</button>
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
        newValue = this.state.weather;
        propName = event.target.innerText.toLowerCase();
        newValue[propName] = !newValue[propName];
        this.setState({weather: newValue})
        break;
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
    let show = !this.state.showing
    this.setState({showing: show})
  }

  render() {
    // debugger;
    let showText = this.state.showing === true ? "Hide" : "Show";
    return (
      <div className='type-filter'>
        <div className="filter-header">
          <p>{this.state.type} ({this.state.displayed.length})</p>
          <button onClick={this._toggleHidden}>{showText}</button>
        </div>
        <div onClick={this._updateFilter} className={"filter-options " + this.state.type}>
          <button className='filter-apply' >Apply Filters</button>
          {this.weatherElements()}
          <div className='filter-formality unselected'>
            <p className='filter-title' onClick={this._applyFilter}>Formality</p>
          </div>
          {this.colorElements()}
        </div>
        <FilteredType type={this.state.type} ids={this.state.filteredIds}/>

      </div>
    )
  }
}

//<input type="checkbox" checkedLink={linkState(this, 'color.white')}/>
