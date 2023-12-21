import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-company dark-mode-text"
              : "experience-text-company"
          }
        >
          {cardInfo.company}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>

        <div className="experience-card-footer">
          {cardInfo.footer &&
            cardInfo.footer.map((v, i) => {
              return (
                <span
                  key={i}
                  className={
                    isDark ? "dark-mode experience-tag" : "experience-tag"
                  }
                  onClick={() => openUrlInNewTab(v.url, v.name)}
                >
                  {v.name}
                </span>
              );
            })}
        </div>
      </div>
    </div>
  );
}
