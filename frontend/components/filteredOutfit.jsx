import React from 'react'

export default class FilteredOutfit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayed: this.props.ids,
    }
    this._generateList = this._generateList.bind(this);
  }
  componentWillReceiveProps(newProps){
    this.setState({displayed: newProps.ids});
  }
  _generateList(){
    return this.state.displayed.map((id) => {
      return <li>{id}</li>
    });
  }
  render () {
    let list = this._generateList();
    return (
      <div className={"viewable-outfits"}>
        Im the viewable outfits
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}
