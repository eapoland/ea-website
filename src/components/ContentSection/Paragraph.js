import React from "react";
import { useTranslation } from "react-i18next";

const Paragraph = ({ content }) => {
  const { t } = useTranslation("common");

  return (
    <div>
      {t(`${content}`, { returnObjects: true }).map((element, index) => (
        <div key={index}>
          {element.subheading && <h5 className="content-section__subheading">{element.subheading}</h5>}
          <p>{element.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Paragraph;
