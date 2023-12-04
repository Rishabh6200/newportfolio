import React from 'react'
import '../assets/css/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="headers">
        <div className="to-blue text-white text-center">
          <p className='p1'>Hello, Everyone</p> <br />
          <p className='p2'>I am Rishabh Chauhan</p>
          <p className='p3'>Web Developer</p>
          <Link to='/about' className='text-white relative top-20 bg-slate-900 p-3 rounded-md'>About Me &nbsp; <i className="fa-solid fa-arrow-right "></i></Link> 
        </div>
      </div>
    </>
  )
}

export default Header