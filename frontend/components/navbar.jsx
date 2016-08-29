import React from 'react'
import { Link } from 'react-router'
import ApiUtil from '../util/apiUtil'

export default class Navbar extends React.Component {

  constructor(props, context){
    super(props, context)
    context.router
  }

  _signOut() {
    ApiUtil.logOutUser()
  }

  render() {
    return (
      <div className='navbar'>
        <p className='navbar-logo'>StyleList</p>
        <ul className='navbar-options'>
          <li className='navbar-item'><Link to={'/articles'} activeStyle={{ color: 'yellow' }}>View Wardrobe</Link></li>
          <li className='navbar-item'>Add Article</li>
          <li className='navbar-item'><Link to={'/outfits'} activeStyle={{ color: 'yellow' }}>View Outfits</Link></li>
          <li className='navbar-item'>Account</li>
          <li className='navbar-item' onClick={this._signOut}>Sign Out</li>
        </ul>
      </div>
    )
  }
}
Navbar.contextTypes = {
  router: React.PropTypes.object.isRequired
}
