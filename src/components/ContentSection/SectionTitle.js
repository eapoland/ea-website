import React from "react";
import "./ContentSection.scss";
import { useTranslation } from "react-i18next";

const SectionTitle = ({ title }) => {
  const { t } = useTranslation("common");

  return <h3 className="content-section__heading">{t(`${title}.heading`)}</h3>;
};

export default SectionTitle;
