import React, { useContext } from "react";
import ApiContext from "../../contexts/ApiContext";
import { TabProps } from "../../Types/TabsProp";

const Tab1: React.FC<TabProps> = ({ opportunity }) => {
  const { data } = useContext(ApiContext);

  const auditObjects = data.lighthouseResult.audits;
  console.log(opportunity);
  return (
    <div className="">
      {opportunity?.map((list) => (
        <div key={list.description}>
          <p>hhhhh</p>
          <div>
            <h2>{list.title}</h2>
          </div>
        </div>
      ))}
      {/* {auditObjects["render-blocking-resources"].details.items.map((list) => (
        <p>{list.url}</p>
      ))} */}
    </div>
  );
};

export default Tab1;
