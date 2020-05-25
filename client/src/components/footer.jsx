import React from "react";
import fac from "../assets/img/FAC_Marca_RGB_PB horizontal a.png";
import secretaria from "../assets/img/SECEC_HORIZONTAL_PRETO-BRANCO_principal CMYK-01a.png";
import { Container, Row, Col } from "react-grid-system";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={10} offset={{ xs: 1 }} className="footer__sponsor">
            Este projeto foi realizado com recursos do Fundo de Apoio à Cultura
            do Distrito Federal
          </Col>
          <Col xs={6} align="end">
            <img className="footer__fac-img" alt="Fac logo" src={fac} />
          </Col>
          <Col xs={6} align="start">
            <img className="footer__sec-img" alt="Fac logo" src={secretaria} />
          </Col>
        </Row>
      </Container>

      <Col xs={12} className="footer__copyright">
        Aerolito © 2019. Todos os direitos reservados. Desenvolvido por
        Aerolito.
      </Col>
    </footer>
  );
};

export default Footer;
