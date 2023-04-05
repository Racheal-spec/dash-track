import React from "react";
import { TabProps } from "../../Types/TabsProp";

const TabDebugData: React.FC<TabProps> = ({ debugdata }) => {
  console.log(debugdata);
  return (
    <div className="">
      <p>Third Tab!! Hurray!!</p>
      {/* Second  tab content will go here */}
    </div>
  );
};

export default TabDebugData;
