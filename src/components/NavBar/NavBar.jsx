import React from "react";
import { useState } from "react";
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  const secciones = ["Sobre Mi", "Proyectos"];

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" light expand="md" className="contenedor">
      <NavLink to={"/"} className='navLink'><h1>BrunoR Dev</h1></NavLink>
    <NavbarToggler onClick={toggle} className='botonMenuHamburguesa'/>
      <Collapse isOpen={isOpen} navbar className="justify-content-md-end">
        <Nav className="ml-auto" navbar>
          <NavItem>
          {secciones.map((e) => (
                <NavLink
                  className='navLink ms-3'

                  key={e}
                  to={`/${e.toLowerCase().split(" ").join("")}`}
                >
                  {e}
                </NavLink>
              ))}
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
