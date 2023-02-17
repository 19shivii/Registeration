import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import name from '../../assets/name1.png'

const Header = () => {
  return (
    <div className="header">
        <img src={logo} className="logo" alt="logo" />
        <img src={name} className="name" alt="logo" />
  </div>)
}

export default Header