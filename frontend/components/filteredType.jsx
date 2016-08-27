import React from 'react'

export default class FilteredType extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayed: []
    }
  }
  render () {
    return (
      <div className="viewable-articles">
        Im the viewable items
      </div>
    )
  }
}
