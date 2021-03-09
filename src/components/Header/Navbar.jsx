import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";
import {Link} from "react-router-dom";

class Navigation extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen: false
        }
    }
    navToggle=()=>{
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render(){
        return (
            <div>
                <Navbar dark color="dark" expand="sm">
                    <div className="container">
                        <NavbarToggler onClick={this.navToggle}/>
                        <NavbarBrand href="/">Imdadul Haque</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link to="/" className="nav-link active">Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/menu" className="nav-link">Menu</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/about" className="nav-link">About</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/contact" className="nav-link">Contact</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
    
}

export default Navigation;








// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () =>{
//     return(
//         <>
//         <div className="container-fluid nav_bg">
//             <div className="row">
//                 <div className="col-10 mx-auto">
//                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                     <div className="container-fluid">
//                         <NavLink className="navbar-brand" to="/">Imdadul Haque</NavLink>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle Navbar">
//                         <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                             <NavLink activeClassName='menu_active' exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
//                             </li>

//                             <li className="nav-item">
//                             <NavLink activeClassName='menu_active' className="nav-link" to="/service">Services</NavLink>
//                             </li>

//                             <li className="nav-item">
//                             <NavLink activeClassName='menu_active' className="nav-link" to="/about">About</NavLink>
//                             </li>

//                             <li className="nav-item">
//                             <NavLink activeClassName='menu_active' className="nav-link" to="/contact">Contact</NavLink>
//                             </li>
                            
//                         </ul>
//                         </div>
//                     </div>
//                 </nav>
//                 </div>
//             </div>
//         </div>
//         </>
//     );
// }

// export default Navbar;