import React from "react";

import iconmap from "../../data/iconmap.json";

type StrToStrMap = {
  [key: string]: string;
};

const ToolBadge: React.FC<{ tools: string[] }> = ({ tools }) => {
  const iconMapCast: StrToStrMap = iconmap;

  return (
    <div className="tool-badges-overlay">
      {tools.map((tool) => (
        <img src={iconMapCast[tool]} alt={tool} />
      ))}
    </div>
  );
};

export default ToolBadge;
