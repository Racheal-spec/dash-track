import React from "react";
import { TabProps } from "../../Types/TabsProp";
import { LearnLink } from "../../utils/globalFunc";
import Collapsible from "../Collapsible";

const TabTable: React.FC<TabProps> = ({ table }) => {
  let tableImages = table?.filter((el) => {
    return el.id === "unsized-images";
  });
  let tableDom = table?.filter((el) => {
    return el.id === "dom-size";
  });
  let tableLSE = table?.filter((el) => {
    return el.id === "layout-shift-elements";
  });
  let tableEventListeners = table?.filter((el) => {
    return el.id === "uses-passive-event-listeners";
  });

  return (
    <div className="">
      {/**===============Table Images Section=========== */}
      {tableImages?.map((list) => (
        <>
          <div key={list.id} className="pb-10">
            <h2 className="font-bold py-4 dark:text-offwhite text-secondary ">
              {list.title}
            </h2>
            <p className="text-[13px] dark:text-textDark">
              {list?.description?.split("[")[0]}
            </p>
            <a
              className="text-[11px] text-primaryColor  font-bold"
              href={LearnLink(list.description)}
            >
              {list?.description?.split("[")[1]?.split("]")[0]}
            </a>
          </div>
        </>
      ))}
      {tableImages?.map((list) => (
        <Collapsible
          key={list.id}
          title1={list.id}
          title2="Image"
          title3="URL"
          open={false}
        >
          <>
            {list.details.items
              .filter((el) => el.url?.slice(0, 4) !== "data")
              .map((detail, index) => (
                <>
                  <div
                    className="items-center grid lg:grid-cols-[1fr_1fr_1fr] py-5"
                    key={index}
                  >
                    <div className="">
                      <h2 className="font-semibold dark:text-offwhite">
                        {detail.node?.nodeLabel}
                      </h2>
                    </div>
                    <div className="items-center">
                      <img src={detail.url} className="w-32" alt="image" />
                    </div>
                    <div>
                      <p className="text-[12px] text-center text-primaryColor">
                        {" "}
                        {detail.node?.snippet ? detail.node.snippet : "None"}
                      </p>
                    </div>
                  </div>
                  <hr className="w-10/12 mx-auto text-lineColor opacity-25" />
                </>
              ))}
          </>
        </Collapsible>
      ))}
      {/**===============Table Dom sizes section================ */}
      {tableDom?.map((list) => (
        <>
          <div key={list.id} className="pb-10">
            <h2 className="font-bold py-4 dark:text-offwhite text-secondary">
              {list.title}
            </h2>
            <p className="text-[13px] dark:text-textDark">
              {list?.description?.split("[")[0]}
            </p>
            <a
              className="text-[11px] text-primaryColor font-bold"
              href={LearnLink(list.description)}
            >
              {list?.description?.split("[")[1]?.split("]")[0]}
            </a>
            <span className="text-[13px] dark:text-textDark">
              {" "}
              {list?.description?.split("[")[1].split("]")[1].split(",")[1]}
              <a
                href={
                  list?.description?.split("[")[2]?.split("]")[1].split("(")[1]
                }
                className="text-[11px] text-primaryColor  font-bold"
              >
                {list?.description?.split("[")[2]?.split("]")[0]}
              </a>
            </span>
            <p>
              <a
                className="text-[11px] text-primaryColor  font-bold"
                href={list?.description?.split("[")[3].split("(")[1]}
              >
                {list?.description?.split("[")[3]?.split("]")[0]}
              </a>
            </p>
          </div>
          {tableDom?.map((list) => (
            <Collapsible
              title1="Statistics"
              title2="Value"
              title3="Granularity"
              open={false}
              key={list.id}
            >
              <>
                {list.details.items.map((list, index) => (
                  <div
                    key={index}
                    className="items-center dark:text-textDark grid lg:grid-cols-[1fr_1fr_1fr] gap-10 py-5"
                  >
                    <div>{list.statistic}</div>
                    <div>{list.value?.value}</div>
                    <div>{list.value?.granularity}</div>
                  </div>
                ))}
              </>
            </Collapsible>
          ))}
          {/**===============Table Layout Shift Elements Section=========== */}
          {tableLSE?.map((list) => (
            <>
              <div key={list.id} className="pb-10">
                <h2 className="font-bold py-4 dark:text-offwhite text-secondary">
                  {list.title}
                </h2>
                <p className="text-[13px] dark:text-textDark">
                  {list?.description?.split("[")[0]}
                </p>
                <a
                  className="text-[11px] text-primaryColor  font-bold"
                  href={LearnLink(list.description)}
                >
                  {list?.description?.split("[")[1]?.split("]")[0]}
                </a>
              </div>
              {tableLSE?.map((list) => (
                <Collapsible
                  title1="Title"
                  title2="Score"
                  title3="Snippet"
                  open={false}
                  key={list.id}
                >
                  <>
                    {list.details.items.map((list, index) => (
                      <div
                        key={index}
                        className="items-center dark:text-textDark grid lg:grid-cols-[1fr_1fr_1fr] gap-10 py-5"
                      >
                        <div>{list.node?.nodeLabel}</div>
                        <div>{list.score}</div>
                        <div className=" text-primaryColor">
                          {list.node?.snippet}
                        </div>
                      </div>
                    ))}
                  </>
                </Collapsible>
              ))}
            </>
          ))}
          {/**===============Table Layout Shift Elements Section=========== */}
          {tableEventListeners?.map((list) => (
            <>
              <div className="pb-10" key={list.id}>
                <h2 className="font-bold py-4 dark:text-offwhite text-secondary">
                  {list.title}
                </h2>
                <p className="text-[13px] dark:text-textDark">
                  {list?.description?.split("[")[0]}
                </p>
                <a
                  className="text-[11px] text-primaryColor  font-bold"
                  href={LearnLink(list.description)}
                >
                  {list?.description?.split("[")[1]?.split("]")[0]}
                </a>
              </div>
              {tableEventListeners?.map((list) => (
                <Collapsible
                  title1="Type"
                  title2="URL"
                  title3="UrlProvider"
                  open={false}
                  key={list.id}
                >
                  <>
                    {list.details.items.map((list, index) => (
                      <div
                        key={index}
                        className="items-center dark:text-textDark grid lg:grid-cols-[1fr_1fr_1fr] gap-10 py-5"
                      >
                        <div>{list.source?.type}</div>
                        <div className="text-primaryColor">
                          {list.source?.url}
                        </div>
                        <div className="">{list.source?.urlProvider}</div>
                      </div>
                    ))}
                  </>
                </Collapsible>
              ))}
            </>
          ))}
        </>
      ))}
    </div>
  );
};

export default TabTable;
