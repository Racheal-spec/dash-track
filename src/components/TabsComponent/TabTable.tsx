import React from "react";
import { tableAudit } from "../../Types/GlobalTypes";
import { TabProps } from "../../Types/TabsProp";
import { LearnLink } from "../../utils/globalFunc";
import Collapsible from "../Collapsible";

const TabTable: React.FC<TabProps> = ({ table }) => {
  console.log(table);

  let tableImages = table?.filter((el) => {
    return el.id === "unsized-images";
  });
  const BaseImgConverter = (el: string) => {
    return el.split("src")[1].split("class")[0].split("=")[1];
  };
  console.log(tableImages);
  return (
    <div className="">
      {tableImages?.map((list) => (
        <>
          <div className="pb-10">
            <h2 className="font-bold py-4 text-greenDark">{list.title}</h2>
            <p className="text-[13px]">{list?.description?.split("[")[0]}</p>
            <a
              className="text-[11px] text-secondary  font-bold"
              href={LearnLink(list.description)}
            >
              {list?.description?.split("[")[1]?.split("]")[0]}
            </a>
          </div>
        </>
      ))}
      {tableImages?.map((list) => (
        <Collapsible title1={list.id} title2="Image" open={false}>
          <>
            {list.details.items
              .filter((el) => el.url?.slice(0, 4) !== "data")
              .map((detail, index) => (
                <>
                  <div
                    className="items-center grid lg:grid-cols-[2fr_1fr_20px] gap-10 py-5"
                    key={index}
                  >
                    <div className="flex justify-between items-center gap-10">
                      <h2 className="font-semibold">
                        {detail.node?.nodeLabel}
                      </h2>
                      <div>
                        <p className="text-[12px] text-center text-secondary">
                          {" "}
                          {detail.node?.snippet ? detail.node.snippet : "None"}
                        </p>
                      </div>
                    </div>

                    <div>
                      <img src={detail.url} className="w-32" alt="image" />
                    </div>
                  </div>
                  <hr className="w-10/12 mx-auto text-lineColor opacity-25" />
                </>
              ))}
          </>
        </Collapsible>
      ))}
    </div>
  );
};

export default TabTable;
