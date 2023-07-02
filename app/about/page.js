'use client'
import React from 'react'
import './about.css'
import Bar from '../bar/bar'
import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEllipsisVertical, faHouseChimney, faPenClip, faUserTie } from '@fortawesome/free-solid-svg-icons'


const Abouts = () => {
  const [harmburger, setharmburger] = useState(false)
  const [open, setOpen] = useState(false)
    const toogle = ()=> {
        setharmburger(!harmburger)
    }
    const toogles = ()=> {
      setOpen(!open)
    }
  return (
    <div className='about'>
      <div className='navb'>
        <div className='navbLogo'>
      <Link href='/'><h1>C <b>D</b></h1></Link>
        </div>
        <div className=''>
        <FontAwesomeIcon icon={faEllipsisVertical} onClick={toogle} className="fa-ellipsis-vertical"/> 
        {harmburger && (
          <Bar/>
        )}
        </div>
        </div>
        <div className='about-display'>
          <div className='about-text'>
            <h2>About Myself!</h2>

            <p> A Frontend Developer with credible experiences in creating, 
              debugging, and maintaining skills for reusability. Certified by Scaler. 
              Very open to gaining more experiences from senior developers and 
              implementing such skills. A very meticulous developer specially 
              experienced in building multi-platform using the Responsive Web 
              Design.I speak HTML, CSS, Javascript,Typescript, Jquery, Next Js.
              I am currently studying Mass Communication at the National Open University of Nigeria. 
            </p>
              <p>I have the ability to solve problems not just a programmer but ability to relate, debug and provide solutions to 
                problems as they occur and to communicate with non-technical clients in a way they can understand. 
                I have excellent analytical skills and the ability to manage several projects at once while staying focused
                Communication Skills is another of my talents. I am always willing to work with other clients and developers. 
                </p>
              <p className='lang-second'>The languages I speak are <b>HTML, CSS, JS, REACT</b></p>
          </div>
            <div className='avatar'>
          <img onClick={toogles} src='/pix/myAvatar.png' alt=''/>
          {open && (<div className='lang'>
            <h1>HTML</h1>
            <h1>CSS</h1>
            <h1>JS</h1>
            <h1>REACT</h1>
            <h1>UI/UX</h1>
          </div>)}
          </div>          
          </div>
          <div className='icons'>
          <Link href='/'><FontAwesomeIcon icon={faHouseChimney} className="fa-house-chimney "/></Link>
        <Link href='/heart'><FontAwesomeIcon icon={faUserTie} className=" fa-user-tie"/></Link>
        <Link href='/portfolio'><FontAwesomeIcon icon={faArrowRight} style={{color:'white'}} className="fa-arrow-right fa-beat"/><FontAwesomeIcon icon={faPenClip} className="fa-pen-clip fa-shake"/></Link>
            </div>
    </div>
  )
}

export default Abouts
