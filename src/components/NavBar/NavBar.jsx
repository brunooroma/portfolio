import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { Stack } from "react-bootstrap";
import './NavBar.css'

const NavBar = () => {
  const secciones = ["Sobre Mi", "Portfolio", "Contacto"];



  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="contenedor">
          <>
            <h1>
              <NavLink className='navLink' to={"/"}>
                BrunoR Dev
              </NavLink>
            </h1>
          </>
          <>
            <Stack direction="horizontal" gap={5}>
              {secciones.map((e) => (
                <NavLink
                  className='navLink'

                  key={e}
                  to={`/${e.toLowerCase().split(" ").join("")}`}
                >
                  {e}
                </NavLink>
              ))}
            </Stack>
          </>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
