import React from "react";
import { TabProps } from "../../Types/TabsProp";

const TabTreemap: React.FC<TabProps> = ({ treemap }) => {
  console.log(treemap);
  return (
    <div className="">
      <p>Treemap Tab!! Hurray!!</p>
      {/* Second  tab content will go here */}
    </div>
  );
};

export default TabTreemap;
