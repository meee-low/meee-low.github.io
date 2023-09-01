import React, { useState } from "react";
import Obfuscate from "react-obfuscate";
// import ReCaptcha from "react-google-recaptcha";

const ContactCaptcha: React.FC<{
  emailCypher: string;
  phoneCypher: string;
}> = ({ emailCypher, phoneCypher }) => {
  return (
    <div>
      <h4>Direct contact:</h4>

    <ul className="direct-contact">
      <li key="email">
        <Obfuscate email={atob(emailCypher)} />
      </li>
      <li key="phone">
        <Obfuscate tel={atob(phoneCypher)} />
      </li>
    </ul>
    </div>
  );
};

export default ContactCaptcha;

// This was my previous attempt, with Captcha

// const ContactCaptcha: React.FC<{
//   emailCypher: string;
//   phoneCypher: string;
// }> = ({ emailCypher, phoneCypher }) => {
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [isCaptchaVerified, setisCaptchaVerified] = useState(false);

//   const handleCaptchaChange = (value: string | null) => {
//     if (value) {
//       setisCaptchaVerified(true);
//       setEmail(decode(emailCypher));
//       setPhone(decode(phoneCypher));
//     } else {
//       // should be the default, but putting it here just in case
//       setisCaptchaVerified(false);
//       setEmail("");
//       setPhone("");
//     }
//   };

//   const secretKey = process.env.REACT_APP_RECAPTCHA_SECRET_KEY;

//   return (
//     <div>
//       {isCaptchaVerified ? (
//         <div>
//           <p>
//             Email: <a href="mailto:{email}">{email}</a>
//           </p>
//           <p>Phone: {phone}</p>
//         </div>
//       ) : (
//         <div>
//           <ReCaptcha
//             sitekey={secretKey as string}
//             onChange={handleCaptchaChange}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContactCaptcha;
