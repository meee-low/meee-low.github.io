import React from "react";

import iconmap from "../../data/iconmap.json";

type StrToStrMap = {
  [key: string]: string;
};

const ToolBadge: React.FC<{ tool: string }> = ({ tool }) => {
  const iconMapCast: StrToStrMap = iconmap;
  const toolImgPath = iconMapCast[tool];

  return (
    <div className="tool-badge">
      {(tool in iconMapCast)?(<img className="badge-icon" src={toolImgPath} alt="icon"></img>):(<div></div>)}
      <p>{tool}</p>
    </div>
  );
};

export default ToolBadge;
