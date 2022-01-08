import React from 'react'
import {Link} from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import About from '../about/About'
import Contact from '../contacts/Contact'
import Accueil from '../accuiel/Accueil'
import User from '../user/User'

export default function bottom_nav() {
    return (
        <div id="nav-bottom">
        <div className="container">
            {/* nav */}
            <ul className="nav-menu">
                <li className="has-dropdown">
                    <Link to="/">Home</Link>
                    <div className="dropdown">
                        <div className="dropdown-body">
                            <ul className="dropdown-list">
                                <li><a href="category.html">Category page</a></li>
                                <li><a href="blog-post.html">Post page</a></li>
                                <li><a href="author.html">Author page</a></li>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="contact.html">Contacts</a></li>
                                <li><a href="blank.html">Regular</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contacts</Link></li>
                <li><Link to="/users">Users</Link></li>
            </ul>
            {/* /nav */}
        </div>
        
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<User />} />
        </Routes>

    </div>
    )
}
