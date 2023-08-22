import React, { useState } from "react";
import ReCaptcha from "react-google-recaptcha";
import decode from "../../utils/cryptography";

const ContactCaptcha: React.FC<{
  emailCypher: string;
  phoneCypher: string;
}> = ({emailCypher, phoneCypher}) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isCaptchaVerified, setisCaptchaVerified] = useState(false);

  const handleCaptchaChange = (value: string | null) => {
    if (value) {
      setisCaptchaVerified(true);
      setEmail(decode(emailCypher));
      setPhone(decode(phoneCypher));
    } else {
      // should be the default, but putting it here just in case
      setisCaptchaVerified(false);
      setEmail("");
      setPhone("");
    }
  };

  return (
    <div>
      {isCaptchaVerified ? (
        <div>
          <p>
            Email: <a href="mailto:{email}">{email}</a>
          </p>
          <p>Phone: {phone}</p>
        </div>
      ) : (
        <div>
          <ReCaptcha sitekey="" onChange={handleCaptchaChange} />
        </div>
      )}
    </div>
  );
};

export default ContactCaptcha;
