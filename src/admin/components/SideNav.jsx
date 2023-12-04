import React from 'react'
import '../assets/css/Sidenav.css'
import titleImg from '../assets/images/dashboard.png'

const SideNav = () => {

  const title = 'Deshboard';

  const dashLink = [
    {
      name: "Home",
      skillicon : 'fa-solid fa-house-chimney'
    },
    {
      name: "Add Skill",
      skillicon : 'fa-solid fa-gear'
    },
    {
      name: 'Add Eduction',
      skillicon: ''
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
              <a href="/"> <i className={item.skillicon} style={{ "color": "#ffffff" }}></i>{item.name} </a>
            </li>
          ))}

        </ul>

      </nav>
    </>
  )
}

export default SideNav