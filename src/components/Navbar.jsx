import { faBook, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "../styles/navbar.scss"
export const Navbar = ({toogleTheme, darkTheme}) => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <FontAwesomeIcon icon={faBook} />
        </div>
        <div className='right-part'>
            <button className={'switch ' + (darkTheme ? "active" : "")} onClick={toogleTheme}></button>
            <FontAwesomeIcon className='moon' icon={faMoon} />
        </div>
    </div>
  )
}
