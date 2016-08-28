import React from 'react'
import FilteredOutfit from './filteredOutfit'

export default class OutfitFilter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      displayed: props.displayed,
      applied: {
        weather: false,
        color: false,
        formality: false
      },
      weather: {
        rain: false,
        snow: false,
        wind: false,
        clouds: true,
        temp: 3
      },
      formality: 3,
      filteredIds: props.displayed
    }
    this._applyFilter = this._applyFilter.bind(this);
    this._updateFilter = this._updateFilter.bind(this);
    this._toggleClass = this._toggleClass.bind(this);
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
  _applyFilter(event) {
    event.preventDefault()

    let newValue;
    let propName;

    switch (event.target.innerText) {
      case 'Weather':
      case 'Formality':
        $(event.currentTarget).parent().toggleClass('unselected');
        newValue = this.state.applied;
        propName = event.target.innerText.toLowerCase();
        newValue[propName] = !newValue[propName];
        this.setState({applied: newValue})
        console.log(newValue[propName]);
        break;
      case 'Rain':
      case 'Clouds':
      case 'Snow':
      case 'Wind':
        newValue = this.state.weather;
        propName = event.target.innerText.toLowerCase();
        newValue[propName] = !newValue[propName];
        this.setState({weather: newValue})
        console.log(newValue[propName], propName);
        break;
    }
  }
  _updateFilter(event) {
    event.preventDefault();
    let filtertype = this.state.type;
    let applied = this.state.applied;
    let weather = this.state.weather;
    let formality = this.state.formality;
    let filteredIds = OutfitStore.filterArticles(filtertype, applied, weather, color, formality);
    this.setState({filteredIds: filteredIds});
  }
  _toggleClass(event) {
    event.preventDefault();
    $('.filter-options.' + this.state.type).toggleClass('isHidden');
    $('.viewable-outfits').toggleClass('isHidden');
  }

  render () {
    return (
      <div className='outfit-filter'>
        <div className="filter-header">
          <p>{this.state.type} ({this.state.displayed.length})</p>
          <button onClick={this._toggleClass}>Show All</button>
        </div>
        <div className={"filter-options"}>
          {this.weatherElements()}
          <div className='filter-formality unselected'>
            <p onClick={this._applyFilter}>Formality</p>
          </div>
          <button onClick={this._updateFilter}>Apply Filter</button>
        </div>
        <FilteredOutfit ids={this.state.filteredIds}/>
      </div>
    )
  }
}
