import React from "react";

const CodeLink: React.FC<{ url: string }> = ({ url }) => {
  if (url === "") {
    return <div></div>;
  }

  const match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n]+)/);

  const message = "Code available at: ";

  let domain = "";
  let iconPath = "";

  if (match != null && match.length >= 2) {
    domain = match[1];
  } else {
    console.log({ match });
    return <div></div>;
  }

  switch (domain) {
    case "github.com":
      iconPath = "img/toolbadges/github_transparent.png";
      break;
    case "kaggle.com":
      iconPath = "img/toolbadges/189_Kaggle-512.webp";
      break;
    default:
      break;
  }

  if (iconPath === "") {
    return (
      <div>
        <a href={url}>
          {message}
          {domain}
        </a>
      </div>
    );
  }

  return (
    <div className="repo-link-area">
      <img className="codebase-icon" src={iconPath} alt="icon"></img>
      <a href={url}>
        {message}
        {domain}
      </a>
    </div>
  );
};

export default CodeLink;
