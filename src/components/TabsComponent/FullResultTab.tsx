import React, { useEffect, useState } from "react";
import { TabProps } from "../../Types/TabsProp";
import Tab2 from "./TabTreemap";
import Tab3 from "./TabDebugData";
import TabContent from "./TabContent";
import TabItem from "./TabItem";
import TabTable from "./TabTable";
import TabOpportunity from "./TabOpportunity";
import Button from "../../uikits/Button";
import { opportunityAudit } from "../../Types/GlobalTypes";
import TabDebugData from "./TabDebugData";
import TabTreemap from "./TabTreemap";

const FullResultTab: React.FC<TabProps> = ({
  opportunity,
  table,
  debugdata,
  treemap,
}) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [postsToShow, setPostsToShow] = useState<opportunityAudit[]>([]);
  const [postsPerPage, setPostPerPage] = useState(3);

  const loopWithSlice = (start: number, end: number) => {
    if (opportunity) {
      let opportunityArr: opportunityAudit[] = opportunity;
      const slicedPosts = opportunityArr.slice(start, end);
      setPostsToShow(slicedPosts);
    }
  };

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, [postsPerPage]);

  const handleShowBtn = () => {
    setPostPerPage((prev) => prev + 3);
  };
  // console.log(treemap);
  return (
    <div>
      <div className="Tabs">
        <div className="py-7 w-6/12  max-sm:w-11/12">
          <h2 className="text-2xl dark:text-offwhite text-textHeaderDark font-bold">
            Performance Breakdown
          </h2>
          <hr className=" w-28 text-primaryColor dark:text-secondary " />
          <div className="py-3">
            <p className="dark:text-textDark">
              Discover what your real users are experiencing and get suggested
              ways to improve your website's performance.
            </p>
            <p className="dark:text-textDark">
              Get first hand solutions and gain 10x more users.
            </p>
          </div>
        </div>
        {/* Tab nav */}
        <ul className="flex items-centerjustify-center rounded-3xl border border-secondary w-auto">
          <TabItem
            title="Diagnostic"
            id="tab1"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabItem
            title="General"
            id="tab2"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          {/* <TabItem
            title="Debug Data"
            id="tab3"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          /> */}
          {/* <TabItem
            title="View TreeMap"
            id="tab3"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          /> */}
        </ul>
        <div className="py-14">
          <TabContent id="tab1" activeTab={activeTab}>
            <TabOpportunity
              opportunity={opportunity}
              postsToShow={postsToShow}
            />
            <div className="flex justify-end">
              <Button
                title="Load More"
                className={
                  "px-4 py-[10px] font-semibold hover:animate-ease cursor-pointer hover:bg-secondary hover:text-offwhite hover:scale text-black  bg-primaryColor"
                }
                onClick={handleShowBtn}
              />
            </div>
          </TabContent>
          <TabContent id="tab2" activeTab={activeTab}>
            <TabTable table={table} />
          </TabContent>
          {/* <TabContent id="tab3" activeTab={activeTab}>
            <TabTreemap treemap={treemap} />
          </TabContent> */}
          {/* <TabContent id="tab3" activeTab={activeTab}>
            <TabDebugData debugdata={debugdata} />
          </TabContent> */}
        </div>
      </div>
    </div>
  );
};

export default FullResultTab;
