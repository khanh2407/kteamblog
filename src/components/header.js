import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header className="h-10 w-full bg-main-gradient flex justify-center ">
    <div className="w-[1280px] flex justify-between items-center">
      <div className="flex items-center">
    <Link to="/">  <StaticImage src="../images/logo.jpg" width={130} alt="logo"/> </Link>
      </div>
      <nav className="w-[300px] h-full ">
        <ul className="flex justify-between items-center h-full">
        <li className=""> <Link to="/contact"> Contact</Link></li>
       <li>  <Link to="/about-us"> About US</Link></li>
        <li>   <Link to="/our-product">Our Product</Link></li>
        </ul>
      
      </nav>
    </div>
   
  </header>
)

export default Header
