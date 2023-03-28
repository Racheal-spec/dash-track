import React, { useState } from "react";
import { oppProp, TabProps } from "../../Types/TabsProp";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import TabContent from "./TabContent";
import TabItem from "./TabItem";

const FullResultTab: React.FC<TabProps> = ({ opportunity }) => {
  const [activeTab, setActiveTab] = useState("tab 1");
  console.log(opportunity);
  return (
    <div>
      <div className="Tabs">
        <div className="py-7 w-6/12">
          <h2 className="text-2xl text-textHeaderDark font-bold">
            Performance Breakdown
          </h2>
          <div className="py-3">
            <p>
              Discover what your real users are experiencing and get suggested
              ways to improve your website's performance.
            </p>
            <p>Get first hand solutions and gain 10x more users.</p>
          </div>
        </div>
        {/* Tab nav */}
        <ul className="flex items-centerjustify-center rounded-3xl border border-greenDark w-auto">
          <TabItem
            title="Opportunity"
            id="tab1"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabItem
            title="Diagnostic"
            id="tab2"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabItem
            title="General"
            id="tab3"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </ul>
        <div className="py-14">
          <TabContent id="tab1" activeTab={activeTab}>
            <Tab1 opportunity={opportunity} />
          </TabContent>
          <TabContent id="tab2" activeTab={activeTab}>
            <Tab2 />
          </TabContent>
          <TabContent id="tab3" activeTab={activeTab}>
            <Tab3 />
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default FullResultTab;
