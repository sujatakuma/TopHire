import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({
      clicked:
        !this.state.clicked
    })
  }
  render() {

    return (

      <div >
        <header className='header'>
          <div className='logo'>
            <h3 style={{color:'black'}}>Tack<span style={{color:'orange'}}>Hi</span>re</h3>
          </div>

          <div className='menu-icon'>

          </div>

          <nav id='navbar' className={this.state.clicked ? '#navbar active' : '#navbar'}  >
            <Link className='menu' id='active' to='/'>For Employers</Link>
            <Link className='menu' to='/about'>Refer & Earn 15k </Link>
            <Link className='menu' to='/eduction'>Login</Link>
            <Link className='menu' to='/project'>Sign Up</Link>

          </nav>
          <div id='mobile' onClick={this.handleClick}>
            <i id='bar'
              className=
              {this.state.clicked ? 'fas fa-times' :
                'fas fa-bars'}>

            </i>

          </div>
        </header>

      </div>

    )
  }
}

export default Navbar