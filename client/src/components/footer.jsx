import React from "react";
import fac from "../assets/img/FAC_Marca_RGB_PB horizontal a.png";
import secretaria from "../assets/img/SECEC_HORIZONTAL_PRETO-BRANCO_principal CMYK-01a.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__sponsor">
        Este projeto foi realizado com recursos do Fundo de Apoio à Cultura do
        Distrito Federal
      </div>
      <div className="footer__imgs">
        <img className="footer__fac-img" alt="Fac logo" src={fac} />
        <img className="footer__sec-img" alt="Fac logo" src={secretaria} />
      </div>
      <div className="footer__copyright">
        Aerolito © 2019. Todos os direitos reservados. Desenvolvido por
        Aerolito.
      </div>
    </footer>
  );
};

export default Footer;
