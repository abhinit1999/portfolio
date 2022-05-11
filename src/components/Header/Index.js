import React from 'react'
import "./style.css";
// import menubar from './menubar.png';
const Header = () => {
  return (
    <>
    <header>
        <div className="text">
            <h1>My Portfolio</h1>
        </div>
        <div className="nav_bar">
            <ul>
                
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Internship</a></li>
                <li><a href="">Porjects</a></li>
                <li><a href="">ContactMe</a></li>
            </ul>
        </div>
    </header>
   


    </>
  )
}

export default Header;