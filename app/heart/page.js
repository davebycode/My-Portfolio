'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Bar from '../bar/bar'
import './heart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faPenClip } from '@fortawesome/free-solid-svg-icons'
// import Intro from '../Intro/intro'
const Heart = () => {
  
    const [harmburger, setharmburger] = useState(false)
    const toogle = ()=> {
        setharmburger(!harmburger)
    }

  return (
    <div className='likes'>
      <div className='navbars'>
        <div className='navbarsLogos'>
      <Link href='/'><h1 style={{color: '#ffff'}}>C <b>D</b></h1></Link>
        </div>
        <div className='logo'>
        <FontAwesomeIcon icon={faBars} onClick={toogle} className="fa-bars-staggered"/> 
        {harmburger && (
          <Bar/>
        )}
        </div>
        
        </div>
        <h1>Hobbies</h1>
      
        <div className='likes-texts'>
          <div className='likes-one'>
          <h3>Design</h3>
          <h4>Designing is an art of creativity, that is, it is an art of bringing aesthetics to life. 
            Taking inspirations from day to day activities, i use this when implementing my designs.</h4>
            </div>
            <div className='likes-two'>
            <h3>Debugging</h3>
            <h4>Problems are meant to be face-lifts to better situations. When a problem is encountered, i feel happy because it is a stepping stone to learning more. 
              However, if (error), return joy. Else, return error. 
            </h4>
            </div>
        </div>
        <div className='next'>
          <Link href="/"><FontAwesomeIcon icon={faHouseChimney} className="fa-house-chimney"/></Link>
        <Link href='/about'><FontAwesomeIcon icon={faArrowRight} style={{color:'white'}} className="fa-arrow-right"/> <FontAwesomeIcon icon={faUserTie} className="fa-user-tie fa-shake"/></Link>
        <Link href='/portfolio'><FontAwesomeIcon icon={faPenClip} className="fa-pen-clip"/></Link>
        </div>
    </div>
  )
}
export default Heart
