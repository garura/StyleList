import React from 'react'
import Navbar from './navbar'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className='test'>butt</div>
        {this.props.children}
      </div>
    )
  }
}
