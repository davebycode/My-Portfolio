'use client'
import React from 'react'
import './bar.css'
import { motion } from "framer-motion"
import Link from 'next/link'


const Bar = () => {
  return (
    <motion.div 
    className='bars'>
      <div className='main-bars'>
      <div className='bars-display'>
      <Link href='https://acrobat.adobe.com/id/urn:aaid:sc:EU:1141c65b-d872-4823-b15d-67501db0bff1'><h5>RESUME</h5></Link>
      <Link href='https://1drv.ms/i/s!AvuNHTAu2GOrdk8T4aLSf_gSRGI?e=gFp7EB'><h5>CERTIFICATE</h5></Link>
      <div className='media'>
      <Link href='https://github.com/davebycode'><h3>GH</h3></Link>
      <Link href='https://www.linkedin.com/in/david-okoyeh-925239275/'><h3>LD</h3></Link>
      <Link href='https://twitter.com/DOkoyeh'><h3>TW</h3></Link>
      </div>
      </div>
      </div>

    </motion.div>
  )
}

export default Bar
