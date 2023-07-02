'use client'
import React from 'react'
import './intro.css'
import Bar from '../bar/bar'
import Link from 'next/link'
import { useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faPenClip } from '@fortawesome/free-solid-svg-icons'





const Intro = () => {
    const [harmburger, setharmburger] = useState(false)
    const toogle = ()=> {
        setharmburger(!harmburger)
    }
  return (
    <div className='basic'>
<div className='navbar'>
        <div className='navbarLogo'>
       <Link href='/'> <h1>C <b>D</b></h1></Link>
        </div>
        <div className='intro'>
        <FontAwesomeIcon icon={faBars} onClick={toogle} className="fa-bars"/> 
        {harmburger && (
          <Bar/>
        )}
        </div>
        </div>
          <div className='developer'>
            <h3>Hello, my name is David</h3>
            <h1>Frontend <br/>Developer.</h1>
            <h4>I love the beauty of web designs.<br/> I love debugging and solving problems.</h4>
          </div>
          <div className='devs'>
            <div className='devs-text'>
            <h4>Highly skilled and proficient.<br/>Good at interacting with others.<br/> Good at UI/UX designs and creativity.</h4>
            <p>Email: <a href='mailto:davidokoyeh@gmail.com'>davidokoyeh@gmail.com</a></p>
            </div>
          </div>
          <div className='pix'>
            <img src='/pix/myAvatar.png' alt=''/>
          </div>
          <div className='hearts'>
            {/* <Links/> */}
         <Link href="/heart"><FontAwesomeIcon icon={faArrowRight} style={{color:'white'}} className="fa-arrow-right"/><FontAwesomeIcon icon={faHeartbeat} className="fa-heart fa-shake"/></Link>
         <Link href='/about'><FontAwesomeIcon icon={faUserTie} className="fa-user-tie"/></Link>
         <Link href='/portfolio'><FontAwesomeIcon icon={faPenClip} className="fa-pen-clip"/></Link>
          </div>

    </div>
  )
}

export default Intro



