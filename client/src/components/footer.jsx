import React from "react";
import fac from "../assets/img/fac_logo.png";
import secretaria from "../assets/img/secretaria_logo.png"

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
