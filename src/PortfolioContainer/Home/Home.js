import React, { Component } from 'react'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import './Home.css'

export default class 
 extends Component {
  render() {
    return (
      <div className='home-container'>
        <Profile/>
        <Footer/>

      </div>
    )
  }
}
