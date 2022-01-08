import React from 'react'

export default function top_nav() {
    return (
    <div id="nav-top">
        <div className="container">
            {/* social */}
            <ul className="nav-social">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
            </ul>
            {/* /social */}

            {/* logo */}
            <div className="nav-logo">
                <a href="index.html" className="logo"><img src="./img/logo.png" alt=""/></a>
            </div>
            {/* /logo */}

            {/* search & aside toggle */}
            <div className="nav-btns">
                <button className="aside-btn"><i className="fa fa-bars"></i></button>
                <button className="search-btn"><i className="fa fa-search"></i></button>
                <div id="nav-search">
                    <form>
                        <input className="input" name="search" placeholder="Enter your search..."/>
                    </form>
                    <button className="nav-close search-close">
                        <span></span>
                    </button>
                </div>
            </div>
            {/* /search & aside toggle */}
        </div>
    </div>
    )
}
