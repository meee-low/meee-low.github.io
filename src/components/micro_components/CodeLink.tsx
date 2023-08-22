import React from "react";

import iconmap from "../../data/iconmap.json";

type StrToStrMap = {
  [key: string]: string;
};

const CodeLink: React.FC<{ url: string }> = ({ url }) => {
  if (url === "") {
    return <div></div>;
  }

  const iconMapCast: StrToStrMap = iconmap;

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
      iconPath = iconMapCast["GitHub"];
      break;
    case "kaggle.com":
      iconPath = iconMapCast["Kaggle"];
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
      {message}
      <img className="codebase-icon" src={iconPath} alt="icon"></img>
      <a href={url}>{domain}</a>
    </div>
  );
};

export default CodeLink;
