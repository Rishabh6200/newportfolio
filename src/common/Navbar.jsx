import React from 'react'
import '../assets/css/Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {

    const navData = ['Home', 'About', 'Resume', 'Projects', 'Contact'];
    const navLink = ['', 'about', 'resume', 'projects', 'contact'];
    const activeClass = ['current'];

    return (
        <>
            <nav className="nav">
                <div className="nav-links">
                    <h1 className="logo">
                        <a href="/"><span>My</span> Website</a>
                    </h1>
                    <ul>
                        {navData.map((item, i) => (
                            <li className='text-black' key={item.i}>
                                <Link to={`/${navLink[i]}`} className={activeClass[i]}>{navData[i]}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar