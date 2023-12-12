import React from 'react'
import '../assets/css/Sidenav.css'
import titleImg from '../assets/images/dashboard.png'
import { Link, Outlet } from 'react-router-dom';

const SideNav = () => {

  const title = 'Deshboard';

  const navLink = ['','addskill','eduction']

  const dashLink = [
    {    
      name: "Home",
      skillicon: 'fa-solid fa-house-chimney'
    },
    {
      name: "Add Skill",
      skillicon: 'fa-solid fa-gear'
    },
    {
      name: 'Add Eduction',
      skillicon: 'fa-solid fa-user-graduate'
    }
  ]

  return (
    <>
      <nav className='side-nav'>
        <div className="title">
          <img src={titleImg} alt="" />
          <h1 className='dash-heading'>{title}</h1>
        </div>
        <hr />
        <ul className='dash-links'>
          {dashLink.map((item, i) => (
            <li>
              <Link to={navLink[i]} key={i}> <i className={item.skillicon} style={{ "color": "#ffffff" }}></i>{item.name} </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default SideNav