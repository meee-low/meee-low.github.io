// AboutMe.tsx
import React from "react";

import ContactCaptcha from "../components/micro_components/ContactCaptcha";

import myInfo from "../data/aboutme.json";

const AboutMe: React.FC = () => {
  const {
    myName,
    picturePath,
    myLinks,
    contactInfo,
    description,
    interests,
    closingThoughts,
  } = myInfo;

  const myLinksCast: Record<string, string> = myLinks;

  return (
    <div className="about-me">
      <div className="profile">
        <h1>{myName}</h1>
        <img src={picturePath} alt="My Profile"></img>
        <ul className="mylinks">
          {Object.keys(myLinksCast).map((site) => {
            const siteUrl: string = myLinksCast[site];
            return (
              <li key={site}>
                <a href={siteUrl} target="_blank" rel="noopener noreferrer">
                  {site}
                </a>
              </li>
            );
          })}
        </ul>
        <ContactCaptcha
          emailCypher={contactInfo.email}
          phoneCypher={contactInfo.phone}
        />
      </div>

      <div className="description">
        <div className="bio">
          {description.map((paragraph) => (
            <p key={paragraph.slice(0, 10)}>{paragraph}</p>
          ))}
        </div>
        <div className="interests">
          <h3>Interests</h3>
          <ul>
            {interests.map((interest) => (
              <li key={interest.slice(0, 5)}>{interest}</li>
            ))}
          </ul>
        </div>
        <div>
          {closingThoughts.map((paragraph) => (
            <p key={paragraph.slice(0, 5)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
