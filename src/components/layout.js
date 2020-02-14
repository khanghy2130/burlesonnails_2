import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import Helmet from 'react-helmet'

import "./scss/layout.scss"
import welcomeBanner from '../images/site-imgs/welcome-banner.jpg';
import footerBanner from '../images/site-imgs/footer-banner.png';


const Layout = ({ children }) => {
  return (
    <>
      <div id='root'>
        <header>
          <div id="image-canvas-div">
            <img src={welcomeBanner} alt="Welcome Banner" />
          </div>
            
          <nav>
            <Link to={`/`} activeClassName="active-link">
              <div></div>
              Home
            </Link>
            <Link to={`/services`} activeClassName="active-link">
              <div></div>
              Services
            </Link>
            <Link to={`/gallery`} activeClassName="active-link">
              <div></div>
              Gallery
            </Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <img src={footerBanner} alt="footer banner" />
          <br />

          <p id="copyright-text">
            Copyright © {new Date().getFullYear()} Burleson Nails & Spa<br/>Website created by <a href="http://www.hynguyen.info/">Hy Nguyen</a>
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
