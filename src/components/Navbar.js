import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link onClick={() => setOpen(false)}  style={{ color: 'black' }}  className='text-decoration-none'  to="/"><span className="">TitoIA </span></Link>
      <button onClick={() => setOpen(!open)}  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div  className={`collapse ${open ? 'show' : ''} navbar-collapse`} id="navbarText" style={{justifyContent:'flex-end'}}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item item-dark">
            <Link onClick={() => setOpen(false)} className='text-decoration-none' to="/cv"><span className="nav-link dark" style={{ color: 'black' }}><strong>CV</strong> <span className="sr-only" ></span></span></Link>
          </li>
          <li className="nav-item">
            <Link className='text-decoration-none'  to="/blog"><span className="nav-link" style={{ color: 'black' }}><strong>Blog</strong></span></Link>
          </li>
          <li className="nav-item">
            <Link className='text-decoration-none'  to="/contact"><span className="nav-link" style={{ color: 'black' }}><strong>Contact</strong></span></Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar