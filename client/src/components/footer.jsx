import React from "react";
import { Col } from "react-grid-system";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <Col xs={12} className="footer__copyright">
        {t("allRights")}
      </Col>
    </footer>
  );
};

export default Footer;
