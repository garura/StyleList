import React from 'react'
import AppDispatcher from '../dispatcher/dispatcher'
import OutfitStore from '../stores/outfitStore'
import OutfitFilter from './outfitFilter'

export default class OutfitsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      outfits: {
        ids: []
      }
    };
    this._onChange = this._onChange.bind(this);
  }

  _onChange() {
    this.setState({outfits: OutfitStore.getOutfits()});
  }

  componentDidMount() {
    this.outfitToken = OutfitStore.addListener(this._onChange);
    // convert this to action call
    $.ajax({
      url: 'api/outfits',
      method: 'GET',
      success: (response) => {
        AppDispatcher.dispatch({
          actionType: "RECEIVE_OUTFITS",
          outfits: response
        });
      },
      error: (response) => {
        debugger;
      }
    })
  }

  render() {

    return (
      <div className="outfits-index">
        <OutfitFilter displayed={this.state.outfits.ids}/>
      </div>
    )
  }
}
