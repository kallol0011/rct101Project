import React from 'react';
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>



             <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/">
    <img className="image" src="https://img.shop.com/Image/resources/logos/shop-logo-us-thanksgiving.svg" alt="logo" />

    </Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <form className="d-flex  " >
        <input className="form-control ms-5 me-2 " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink to="/exclusivebrands" style={{textDecoration:"none"}} ><a className="nav-link active NavItem " style={{fontSize:"18px"}} aria-current="page" href="#">Exclusive Brands</a></NavLink>
          
        </li>

        <li className="nav-item">
        <NavLink to="/stores" clasName="NavItem" style={{textDecoration:"none"}} > <a className="nav-link active NavItem " style={{fontSize:"18px"}}  href="#">Stores</a> </NavLink>

        </li>

        <li className="nav-item">
        <NavLink to="/deals" style={{textDecoration:"none"}} > <a className="nav-link active NavItem " style={{fontSize:"18px"}} >
            Deals
          </a> </NavLink>
          </li>

         <li className="nav-item" >
            <NavLink to="/shoptravel" style={{textDecoration:"none"}} > <a className="nav-link active NavItem " style={{fontSize:"18px"}} href=""></a> </NavLink>
         </li>

         <li className="nav-item" >
            <NavLink to="/departments" style={{textDecoration:"none"}} ><a className="nav-link active NavItem " style={{fontSize:"18px"}} >Departments</a></NavLink>
         </li>
          
        
        <li className="nav-item" >
            <NavLink to="/shopbuddy" style={{textDecoration:"none"}} ><a className="nav-link active NavItem " style={{fontSize:"18px"}} href="#">ShopBuddy</a></NavLink>

        </li>

        <li className="nav-item" >
           <NavLink to="/shopLocal" style={{textDecoration:"none"}} ><a className="nav-link active NavItem " style={{fontSize:"18px"}} href="#">SHOP Local</a></NavLink>

        </li>
        
      </ul>
      
    </div>
  </div>
</nav>


        </div>
    );
};

export default Navbar;


