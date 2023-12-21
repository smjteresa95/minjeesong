import React, {useContext} from "react";
import "./AboutMe.scss";
import {aboutMe} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function AboutMe() {
  const {isDark} = useContext(StyleContext);
  if (!aboutMe.display) {
    return null;
  }
  return (
    <div id="aboutMe">
      <Fade bottom duration={1000} distance="20px">
        <div className="aboutMe-container" id="aboutMe">
          <div>
            <h1 className="aboutMe-heading">About Me</h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle aboutMe-subtitle"
                  : "subTitle aboutMe-subtitle"
              }
            >
              {aboutMe.subtitle}
            </p>

            <p
              className={
                isDark
                  ? "dark-mode subTitle aboutMe-subtitle"
                  : "subTitle aboutMe-subtitle"
              }
            >
              {aboutMe.contents.map((content, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle aboutMe-content"
                        : "subTitle aboutMe-content"
                    }
                  >
                    {content}
                  </p>
                );
              })}
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
