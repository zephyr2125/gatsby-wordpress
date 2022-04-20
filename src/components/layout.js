import React from "react"
import Header from "./header";
import Footer from "./footer";

import "../assets/scss/main.scss"

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

export default Layout
