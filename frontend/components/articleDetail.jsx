import React from 'react'

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

export default class ArticleDetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      info: props.info
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({info: newProps.info})
  }

  generateDetails() {
    if (this.state.info.title) {
      let weather = this.generateWeatherText();
      return (
        <div className='detail-container'>
          <img className='detail-image'alt='Item image' src='https://squareup.com/apple-touch-icon-152x152.png'/>
          <div className='detail-text'>
            <p className='detail-content'>Title: {this.state.info.title}</p>
            <p className='detail-content'>Color: {this.state.info.color}</p>
            <p className='detail-content'>Formality: {formalityKey[this.state.info.formality]}</p>
            <p className='detail-content'>Last worn: {this.state.info.last_worn || "Unknown"}</p>
            <p className='detail-content'>Brand: {this.state.info.brand || "Unknown"}</p>
            <p className='detail-content'>Temperature range: {weatherKey[this.state.info.temp_min]} to {weatherKey[this.state.info.temp_max]}</p>
            <p className='detail-content'>Wearable in: {weather}</p>
            <p className='detail-content'>Notes: {this.state.info.description || "No additional notes"}</p>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className='detail-empty'>
          <p >Click an item to see more details</p>
        </div>
      )
    }
  }

  generateWeatherText() {
    let weather = [];
    ["rain", "clouds", "snow", "wind"].forEach((condition) => {
      if (this.state.info[condition]) {
        weather.push(condition);
      }
    })
    weather = weather.join(", ")
    weather = weather || "Good weather only"

    return weather;
  }

  render() {
    let details = this.generateDetails();
    return (
      <div className="article-detail">
        {details}
      </div>
    )
  }
}

// <p className='detail-content'>
//   <img className='detail-image'alt='Item image' src='https://squareup.com/apple-touch-icon-152x152.png'/>
//   Title: {this.state.info.title}
//   <br/>
//   Color: {this.state.info.color}
//   <br/>
//   Formality: {formalityKey[this.state.info.formality]}
//   <br/>
//   Last worn: {this.state.info.last_worn || "Unknown"}
//   <br/>
//   Brand: {this.state.info.brand || "Unknown"}
//   <br/>
//   Temperature range: {weatherKey[this.state.info.temp_min]} to {weatherKey[this.state.info.temp_max]}
//   <br/>
//   Wearable in: {weather}
//   <br/>
//   Notes: {this.state.info.description || "No additional notes"}
// </p>

// <div className='detail-container'>
//   <img className='detail-image'alt='Item image' src='https://squareup.com/apple-touch-icon-152x152.png'/>
//   <div className='detail-text'>
//     <p className='detail-title'>Title: {this.state.info.title}</p>
//     <br/>
//     <p className='detail-color'>Color: {this.state.info.color}</p>
//     <br/>
//     <p className='detail-formality'>Formality: {formalityKey[this.state.info.formality]}</p>
//     <br/>
//     <p className='detail-worn'>Last worn: {this.state.info.last_worn || "Unknown"}</p>
//     <br/>
//     <p className='detail-brand'>Brand: {this.state.info.brand || "Unknown"}</p>
//     <br/>
//     <p className='detail-min'>Temperature range: {weatherKey[this.state.info.temp_min]} to {weatherKey[this.state.info.temp_max]}</p>
//     <br/>
//     <p className='detail-weather'>Wearable in: {weather}</p>
//     <br/>
//     <p className='detail-description'>Notes: {this.state.info.description || "No additional notes"}</p>
//   </div>
// </div>
