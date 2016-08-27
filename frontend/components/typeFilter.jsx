import React from 'react'
import ArticleStore from '../stores/articleStore'

export default class TypeFilter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      type: props.type,
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
      formality: 3
    }
    this._applyFilter = this._applyFilter.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({displayed: newProps.displayed})
  }

  weatherElements() {
    // check if weather is applied, if no disable buttons
    return (
      <div className='filter-weather'>
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
      case 'Colors':
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

  render() {

    return (
      <div className='type-filter'>
        <p>{this.state.type} ({this.state.displayed.length})</p>
        {this.weatherElements()}
        <div className='filter-formality'>
          <p onClick={this._applyFilter}>Formality</p>
        </div>
        <div className='filter-colors'>
          <p onClick={this._applyFilter}>Colors</p>
        </div>

      </div>
    )
  }
}
