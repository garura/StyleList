import React from 'react'
import { Link } from 'react-router'

export default class Navbar extends React.Component {
  constructor(props, context){
    super(props, context)
    context.router
  }
  render() {
    return (
      <div className='navbar'>
        <p className='navbar-logo'>StyleList</p>
        <ul className='navbar-options'>
          <li className='navbar-item'><Link to={'/articles'}>View Wardrobe</Link></li>
          <li className='navbar-item'>Add Article</li>
          <li className='navbar-item'><Link to={'/outfits'}>View Outfits</Link></li>
          <li className='navbar-item'>Account</li>
          <li className='navbar-item'>Sign Out</li>
        </ul>
      </div>
    )
  }
}
Navbar.contextTypes = {
  router: React.PropTypes.object.isRequired
}
