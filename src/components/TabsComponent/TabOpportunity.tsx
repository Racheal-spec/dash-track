import React from "react";
import { TabProps } from "../../Types/TabsProp";
import { LearnLink } from "../../utils/globalFunc";
import Collapsible from "../Collapsible";

const TabOpportunity: React.FC<TabProps> = ({ postsToShow }) => {
  return (
    <div className="">
      {postsToShow?.map((list) => (
        <>
          <div className="grid py-5 max-sm:py-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-3">
            <div className="grid lg:grid-cols-2">
              <div>
                <h2 className="font-bold py-4 max-sm:py-2 text-secondary dark:text-offwhite">
                  {list.title}
                </h2>
                <p className="text-[12px] dark:text-textDark pt-3">
                  {list?.description?.split("[")[0]}
                </p>
                <a
                  className="text-[11px] text-primaryColor  font-bold"
                  href={LearnLink(list.description)}
                >
                  {list?.description?.split("[")[1]?.split("]")[0]}
                </a>
              </div>
              <div className="max-sm:py-3">
                <h2 className="font-bold py-4 max-sm:py-2 text-center lg:text-center max-sm:text-left  md:text-left text-secondary dark:text-offwhite">
                  Potential Savings
                </h2>
                <p className="text-center lg:text-center max-sm:text-left  md:text-left text-[12px] dark:text-textDark text-urlColor font-semibold pt-3 md:pt-0 max-sm:pt-0">
                  {list.displayValue ? list.displayValue : "None"}
                </p>
              </div>
            </div>
            <div className="max-sm:pb-6 md:py-5">
              <Collapsible title1="URL" title2="TotalBytes" open={false}>
                {postsToShow?.map((list) => (
                  <>
                    {list.details?.items.length !== 0 &&
                      list.details?.items.map((detail, index) => (
                        <>
                          <div
                            className="items-center grid lg:grid-cols-[2fr_150px_0px]  md:grid-cols-[2fr_1fr_0fr] max-sm:grid-cols-[2fr_1fr_0fr]  py-2"
                            key={index}
                          >
                            {!detail ? (
                              <div>
                                <p>No data</p>
                              </div>
                            ) : (
                              <>
                                <div>
                                  <a
                                    href={detail.url}
                                    className=" text-[12px] text-primaryColor"
                                  >
                                    {detail.url.slice(-4) === ".png" ||
                                    detail.url.slice(-4) === ".jpg" ? (
                                      <img
                                        src={detail.url}
                                        className="w-36"
                                        alt="website image"
                                      />
                                    ) : (
                                      <p className="max-sm:w-36">
                                        {detail.url
                                          ? `${detail.url.slice(0, 45)}...`
                                          : "None"}
                                      </p>
                                    )}
                                  </a>
                                </div>
                                <div className="">
                                  {" "}
                                  <p className="text-[12px] max-sm:w-40 max-sm:text-left max-sm:pl-8 dark:text-textDark font-semibold">
                                    {" "}
                                    {detail.totalBytes
                                      ? detail.totalBytes
                                      : "None"}
                                  </p>
                                </div>
                              </>
                            )}
                          </div>
                        </>
                      ))}
                  </>
                ))}
              </Collapsible>
            </div>
          </div>
          <hr className="w-10/12 mx-auto text-lineColor opacity-25" />
        </>
      ))}
    </div>
  );
};

export default TabOpportunity;
