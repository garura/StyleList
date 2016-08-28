import React from 'react'
import linkState from 'react-link-state'
import ArticleStore from '../stores/articleStore'
import FilteredType from './filteredType'

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
      filteredIds: props.displayed

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
    // check if weather is applied, if no disable buttons
    return (
      <div className='filter-weather unselected'>
        <p onClick={this._applyFilter}>Weather</p>
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
    if (this.state.applied.colors) {
      let tar = $(event.currentTarget);
      let color = this.state.color
      color[tar.text()] = !color[tar.text()]
      tar.toggleClass('unchecked');
      this.setState({color: color});
    }
  }

  colorElements() {
    return (
      <div className='filter-colors unselected'>
        <p onClick={this._applyFilter}>Colors</p>
        <label onClick={this._toggleCheckedColor} className="color-checkbox white unchecked"><span></span>white</label>
        <label onClick={this._toggleCheckedColor} className="color-checkbox red unchecked"><span></span>red</label>
      </div>
    )
  }

  _applyFilter(event) {
    event.preventDefault()

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
    $('.filter-options.' + this.state.type).toggleClass('isHidden');
    $('.viewable-articles.' + this.state.type).toggleClass('isHidden');
  }

  render() {
    return (
      <div className='type-filter'>
        <div className="filter-header">
          <p>{this.state.type} ({this.state.displayed.length})</p>
          <button onClick={this._toggleHidden}>Show All</button>
        </div>
        <div className={"filter-options " + this.state.type}>
          {this.weatherElements()}
          <div className='filter-formality unselected'>
            <p onClick={this._applyFilter}>Formality</p>
          </div>
          {this.colorElements()}
          <button onClick={this._updateFilter}>Apply Filter</button>
        </div>
        <FilteredType type={this.state.type} ids={this.state.filteredIds}/>

      </div>
    )
  }
}

//<input type="checkbox" checkedLink={linkState(this, 'color.white')}/>
