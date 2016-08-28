import React from 'react'
import ApiUtil from '../util/apiUtil'
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
    ApiUtil.fetchOutfits();
  }

  componentWillUnmount() {
    this.outfitToken.remove();
  }

  render() {

    return (
      <div className="outfits-index">
        <OutfitFilter displayed={this.state.outfits.ids}/>
      </div>
    )
  }
}
