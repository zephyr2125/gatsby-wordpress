import React from "react";
import PropTypes from "prop-types";
import "../assets/scss/main.scss";
import Header from "../components/header";
import Footer from "../components/footer";


const Layout = ({ children }) => {
  return (
    <div className="site-main">
      <div className="container_site">
        <header id='site__header'>
          <Header />
        </header>
        <main className="main">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
