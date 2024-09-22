import React from 'react'
import "../header/Header.css"
import homeimg from "../../assets/Img/1.jpg"

export default function Header() {
  return (
    <div className='header'>
       <div className="headerTitles">
        <span className='headerTitleLg'>React Blog</span>
       </div>
       <img className='headerImg' src={homeimg} alt="" />
    </div>
  )
}

