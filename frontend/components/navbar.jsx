import React from 'react'

export default class Navbar extends React.Component {
  render() {
    return (
      <div className='navbar'>
        <p className='navbar-logo'>StyleList</p>
        <ul className='navbar-options'>
          <li className='navbar-item'>View Wardrobe</li>
          <li className='navbar-item'>Add Article</li>
          <li className='navbar-item'>View Outfits</li>
          <li className='navbar-item'>Account</li>
          <li className='navbar-item'>Sign Out</li>
        </ul>
      </div>
    )
  }
}
