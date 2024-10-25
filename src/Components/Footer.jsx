import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Make sure to replace with actual logo path

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-left mb-3 mb-md-0">
            <img src="logo.png" alt="Logo" style={{ height: "50px" }} />
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Your Website
            </p>
          </Col>
          <Col md={4} className="text-center text-md-right">
            <a
              href="https://github.com/Musaeeb-Zahir"
              className="text-light mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/musaeeb-zahir-96a6ba2a4/"
              className="text-light mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
