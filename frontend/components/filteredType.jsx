import React from 'react'

export default class FilteredType extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayed: this.props.ids,
      type: this.props.type
    }
    this._generateList = this._generateList.bind(this);
  }
  componentWillReceiveProps(newProps){
    this.setState({displayed: newProps.ids,
                  type: newProps.type});
  }
  _generateList(){
    return this.state.displayed.map((id) => {
      return <li>{id}</li>
    });
  }
  render () {
    let list = this._generateList();
    return (
      <div className={"viewable-articles " + this.state.type}>
        Im the viewable items
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}
