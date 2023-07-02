'use client'
import React from 'react'
import './portfolio.css'
import { useState } from 'react'
import Bar from '../bar/bar'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEllipsis, faHouseChimney, faPenClip, faUserTie } from '@fortawesome/free-solid-svg-icons'


const Portfolios = () => {

    const [harmburger, setharmburger] = useState(false)
    const toogle = ()=> {
        setharmburger(!harmburger)
    }
  return (
    <div className='article'>
      <div className='navs'>
        <div className='navsLogo'>
       <Link href='/'> <h1>C <b>D</b></h1></Link>
        </div>
        <div>
        <FontAwesomeIcon icon={faEllipsis} onClick={toogle} className="fa-ellipsis"/> 
        {harmburger && (
          <Bar/>
        )}
        </div>
        </div>
        <div className='portfolio'>
          <h1>Portfolio</h1>
        </div>
            <div className='Portfolio'>
              <div className='portfolio-projects'>
                <div className='main-projects'>
                  <div className='projects'>
                  <Link href='https://6460929cef063b5b719ff1b8--whimsical-dango-27b8b4.netlify.app/'><img src='/pix/Interior.png' alt=''/></Link>
                  <h1>Interior Decor</h1>
                  <br/>
                  <Link href='https://6460929cef063b5b719ff1b8--whimsical-dango-27b8b4.netlify.app/'><button>Template Review</button></Link>
                  </div>
                  <div className='projects'>
                  <Link href='https://github.com/davebycode/Flight-App.git'><img src='/pix/Flight.png' alt=''/></Link>
                 <h1>Flight App</h1>
                <br/>
                <Link href='https://github.com/davebycode/Flight-App.git'><button>Template Review</button></Link>
                </div>
                <div className='projects'>
                  <Link href='https://app.netlify.com/sites/astounding-crumble-7c758b/overview'><img src='/pix/Netflix.png' alt=''/></Link>
                  <h1>Netflix App</h1>
                <br/>
                <Link href='https://app.netlify.com/sites/astounding-crumble-7c758b/overview'><button>Template Review</button></Link>
                </div>
                <div className='projects'>
                  <Link href='https://github.com/davebycode/e-commerce-app-web'><img src='/pix/e-commerce.png' alt=''/></Link>
                  <h1>Netflix App</h1>
                <br/>
                <Link href='https://github.com/davebycode/e-commerce-app-web'><button>Template Review</button></Link>
                </div>
                </div>
              </div>
            </div>

        <div className='portfolio-icons'>
        <Link href='/heart'><FontAwesomeIcon icon={faUserTie} className="fa-user-tie"/></Link>
        <Link href='/about'><FontAwesomeIcon icon={faPenClip} className="fa-pen-clip"/></Link>
         <Link href='/'><FontAwesomeIcon icon={faArrowRight} style={{color:'white'}} className="fa-arrow-right fa-beat"/> <FontAwesomeIcon icon={faHouseChimney} className="fa-house-chimney fa-shake"/></Link>


        </div>
      </div>

  )
}

export default Portfolios
