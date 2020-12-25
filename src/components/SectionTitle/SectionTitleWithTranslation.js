import React from "react";
import "./SectionTitle.scss";
import { useTranslation } from "react-i18next";
import SectionTitle from "./SectionTitle";

const SectionTitleWithTranslation = ({ content }) => {
  const { t } = useTranslation("common");
  const newContent = {
    text: t(`${content}.text`),
    title: t(`${content}.title`),
  };

  return <SectionTitle content={newContent} />;
};

export default SectionTitleWithTranslation;
