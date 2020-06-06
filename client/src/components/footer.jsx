import React from "react";
import { Col } from "react-grid-system";

const Footer = () => {
  return (
    <footer className="footer">
      <Col xs={12} className="footer__copyright">
        Aerolito © 2019. Todos os direitos reservados. Desenvolvido por
        Aerolito.
      </Col>
    </footer>
  );
};

export default Footer;
