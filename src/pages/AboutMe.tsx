// AboutMe.tsx
import React from "react";

import ContactCaptcha from "../components/micro_components/ContactCaptcha";

import myInfo from "../data/aboutme.json";

const AboutMe: React.FC = () => {
  const { myName, picturePath, myLinks, contactInfo, interests } = myInfo;

  return (
    <div className="about-me">
      <ContactCaptcha
        emailCypher={contactInfo.email}
        phoneCypher={contactInfo.phone}
      />
    </div>
  );
};

export default AboutMe;
