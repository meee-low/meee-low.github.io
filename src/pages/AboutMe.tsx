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

  return (
    <div className="about-me">
      <h1>{myName}</h1>
      <img src={picturePath} alt="My Profile"></img>
      <ul className="mylinks">
        {/* {myLinks.map((link) => (
          <li>
            <a href={link}>link</a>
          </li>
        ))} */}
      </ul>
      {/* <ContactCaptcha
        emailCypher={contactInfo.email}
        phoneCypher={contactInfo.phone}
      /> */}
      <div className="description">
        {description.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
      <div className="interests">
        <h3>Interests</h3>
        <ul>
          {interests.map((interest) => (
            <li>{interest}</li>
          ))}
        </ul>
      </div>
      <div>
        {closingThoughts.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
