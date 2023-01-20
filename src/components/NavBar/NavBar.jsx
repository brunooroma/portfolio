import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { Stack } from "react-bootstrap";

const NavBar = () => {
  const secciones = ["Sobre Mi", "Proyectos", "Contacto"];

  let estiloLinks = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <>
            <h1>
              <NavLink style={estiloLinks} to={"/"}>
                Inicio
              </NavLink>
            </h1>
          </>
          <>
            <Stack direction="horizontal" gap={5}>
              {secciones.map((e) => (
                <NavLink
                  style={estiloLinks}
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
