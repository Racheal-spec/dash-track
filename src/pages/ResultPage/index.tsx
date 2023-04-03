import React, { useContext } from "react";
import wine from "../../assets/wine.jpg";
import FaCloudsmith from "react-icons/fa";
import BorderCard from "../../components/BorderCard";
import SmallCard from "../../components/SmallCard";
import ApiContext from "../../contexts/ApiContext";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import metricsCalc from "../../utils/metricsCalc";
import Calc from "../../utils/timeFunction";
import FullResultTab from "../../components/TabsComponent/FullResultTab";
import { TabProps } from "../../Types/TabsProp";
import { opportunityAudit, tableAudit } from "../../Types/GlobalTypes";

const ResultPage: React.FC = () => {
  const { data } = useContext(ApiContext);

  // console.log(data);
  const auditObjects = data.lighthouseResult.audits;
  const screenshotObj = data.lighthouseResult.audits["screenshot-thumbnails"];
  const metricsobjects =
    data.lighthouseResult.audits?.metrics?.details.items[0];
  let newKeys = Object.keys(auditObjects);
  let newEl = Object.values(auditObjects);

  const selectedObjects = [
    "cumulative-layout-shift",
    "first-contentful-paint",
    "total-blocking-time",
    "speed-index",
    "interactive",
    "largest-contentful-paint",
  ];

  let newAuditsObject = newKeys
    .filter((key) => selectedObjects.includes(key))
    .map((key) => {
      return auditObjects[key];
    })
    .filter((el) => el);

  let opportunity: opportunityAudit[] = [];
  let table: tableAudit[] = [];
  let debugdata = [];
  let criticalreq = [];
  let treemap = [];
  newEl.forEach((el) => {
    if (el && "details" in el) {
      if (el.details.type === "opportunity") {
        const { details, ...rest } = el;
        opportunity?.push({ details, ...rest });
      }
    }
  });

  newEl.forEach((el) => {
    if (el && "details" in el) {
      if (el.details.type === "table") {
        const { details, ...rest } = el;
        table?.push({ details, ...rest });
      }
    }
  });

  console.log(opportunity);

  let perfScore = data.lighthouseResult.categories.performance.score;

  return (
    <>
      <div className="border border-lineColor border-opacity-25">
        <div>
          <h2 className="text-2xl text-urlColor text-center py-5 font-bold">
            Your Performance Summary is Ready
          </h2>
          <hr className="w-10/12 mx-auto text-lineColor opacity-25" />
        </div>
        <div className="flex justify-between items-center divide-x-2 text-lineColor py-10">
          <div className="mx-8">
            <CircularProgressbar
              maxValue={1}
              value={perfScore}
              background={true}
              text={`${Math.round(perfScore * 100)}%`}
              backgroundPadding={6}
              styles={buildStyles({
                textSize: "12px",
                backgroundColor: "#778C7B",
                trailColor: "#D8D7D0",
                textColor: "#fff",

                pathColor: "#9C912C",
              })}
            />
          </div>
          <div className="mx-10 bg-white max-w-xl max-h-96 overflow-hidden">
            <img
              src={data.lighthouseResult.fullPageScreenshot.screenshot.data}
              className="p-8 shadow-textPlaceholder shadow-xl "
              alt="dashtrack image result"
            />
          </div>
        </div>
      </div>
      {/**================== Metrics section======================== */}
      <section className="py-10">
        <div>
          <p className="text-2xl text-urlColor py-5 font-bold ">Metrics</p>
        </div>
        <div className="grid sm:gap-2 md: gap-3 lg:gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 py-3">
          <div>
            <SmallCard
              metricstitle="FCP"
              timing={
                metricsobjects &&
                "firstContentfulPaint" in metricsobjects &&
                metricsobjects?.firstContentfulPaint ? (
                  metricsCalc(metricsobjects?.firstContentfulPaint) < "1.8s" ? (
                    <p style={{ color: "green" }}>
                      {metricsCalc(metricsobjects?.firstContentfulPaint)}
                    </p>
                  ) : metricsCalc(metricsobjects.firstContentfulPaint) <
                    "4.0s" ? (
                    <p style={{ color: "#9C912C" }}>
                      {metricsCalc(metricsobjects.firstContentfulPaint)}
                    </p>
                  ) : (
                    <p style={{ color: "red" }}>
                      {metricsCalc(metricsobjects.firstContentfulPaint)}
                    </p>
                  )
                ) : (
                  <></>
                )
              }
              italictext="(First contentful paint)"
            />
          </div>

          <div>
            <SmallCard
              metricstitle="TTI"
              timing={
                metricsobjects &&
                "interactive" in metricsobjects &&
                metricsobjects?.interactive ? (
                  metricsCalc(metricsobjects.interactive) < "3.8s" ? (
                    <p style={{ color: "green" }}>
                      {metricsCalc(metricsobjects.interactive)}
                    </p>
                  ) : metricsCalc(metricsobjects.interactive) < "7.3s" ? (
                    <p style={{ color: "#9C912C" }}>
                      {metricsCalc(metricsobjects.interactive)}
                    </p>
                  ) : (
                    <p style={{ color: "red" }}>
                      {metricsCalc(metricsobjects.interactive)}
                    </p>
                  )
                ) : (
                  <></>
                )
              }
              italictext="Time To Interactive"
            />
          </div>
          <div>
            <SmallCard
              metricstitle="SI"
              timing={
                metricsobjects &&
                "speedIndex" in metricsobjects &&
                metricsobjects?.speedIndex ? (
                  metricsCalc(metricsobjects.speedIndex) < "4.3s" ? (
                    <p style={{ color: "green" }}>
                      {metricsCalc(metricsobjects.speedIndex)}
                    </p>
                  ) : metricsCalc(metricsobjects.speedIndex) < "5.8s" ? (
                    <p style={{ color: "#9C912C" }}>
                      {metricsCalc(metricsobjects.speedIndex)}
                    </p>
                  ) : (
                    <p style={{ color: "red" }}>
                      {metricsCalc(metricsobjects.speedIndex)}
                    </p>
                  )
                ) : (
                  <></>
                )
              }
              italictext="SpeedIndex"
            />
          </div>

          <div>
            <SmallCard
              metricstitle="TBT"
              timing={
                metricsobjects &&
                "totalBlockingTime" in metricsobjects &&
                metricsobjects?.totalBlockingTime ? (
                  metricsCalc(metricsobjects.totalBlockingTime) < "0.15s" ? (
                    <p style={{ color: "green" }}>
                      {metricsCalc(metricsobjects.totalBlockingTime)}
                    </p>
                  ) : metricsCalc(metricsobjects.totalBlockingTime) <
                    "0.24s" ? (
                    <p style={{ color: "#9C912C" }}>
                      {metricsCalc(metricsobjects.totalBlockingTime)}
                    </p>
                  ) : (
                    <p style={{ color: "red" }}>
                      {metricsCalc(metricsobjects.totalBlockingTime)}
                    </p>
                  )
                ) : (
                  <></>
                )
              }
              italictext="(Total Blocking Time)"
            />
          </div>
          <div>
            <SmallCard
              metricstitle="LCP"
              timing={
                metricsobjects &&
                "largestContentfulPaint" in metricsobjects &&
                metricsobjects?.largestContentfulPaint ? (
                  metricsCalc(metricsobjects.largestContentfulPaint) <
                  "2.5s" ? (
                    <p style={{ color: "green" }}>
                      {metricsCalc(metricsobjects.largestContentfulPaint)}
                    </p>
                  ) : metricsCalc(metricsobjects.largestContentfulPaint) <
                    "4.0s" ? (
                    <p style={{ color: "#9C912C" }}>
                      {metricsCalc(metricsobjects.largestContentfulPaint)}
                    </p>
                  ) : (
                    <p style={{ color: "red" }}>
                      {metricsCalc(metricsobjects.largestContentfulPaint)}
                    </p>
                  )
                ) : (
                  <></>
                )
              }
              italictext="(Largest Contentful Paint)"
            />
          </div>

          <div>
            <SmallCard
              metricstitle="TCL"
              timing={
                metricsobjects &&
                "totalCumulativeLayoutShift" in metricsobjects &&
                metricsobjects?.totalCumulativeLayoutShift ? (
                  metricsCalc(metricsobjects.totalCumulativeLayoutShift) <
                  "0.10s" ? (
                    <p style={{ color: "green" }}>
                      {metricsCalc(metricsobjects.totalCumulativeLayoutShift)}
                    </p>
                  ) : metricsCalc(metricsobjects.totalCumulativeLayoutShift) <
                    "0.25s" ? (
                    <p style={{ color: "#9C912C" }}>
                      {metricsCalc(metricsobjects.totalCumulativeLayoutShift)}
                    </p>
                  ) : (
                    <p style={{ color: "red" }}>
                      {metricsCalc(metricsobjects.totalCumulativeLayoutShift)}
                    </p>
                  )
                ) : (
                  <></>
                )
              }
              italictext="(Total Cumulative Layout Shift)"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {newAuditsObject?.map((list) => (
            <div className="py-2">
              <BorderCard
                auditTitle={list?.title || ""}
                description={list?.description || ""}
                timing={Calc(list?.displayValue || "", list?.title || "")}
              />
            </div>
          ))}
        </div>
      </section>
      {/**=================Image filmstrip section============== */}
      <section className="my-10 border border-r-greenDark">
        <div className="bg-smallcardColor py-5 px-2 mb-5">
          <h3 className="font-bold text-xl text-lineColor">
            Visual Loading Screen
          </h3>
          <p className="py-2">{screenshotObj?.description}</p>
        </div>
        <div className="grid gap-2 bg-lineColor p-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 ">
          {screenshotObj?.details.type === "filmstrip"
            ? screenshotObj?.details.items.map((item) => (
                <div className="border border-inputbg p-1 ">
                  <img
                    className="w-44"
                    src={item.data}
                    alt="screenshot thumbnails"
                  />
                </div>
              ))
            : null}
        </div>
      </section>
      {/**=================Full results tab section============== */}
      <section>
        <FullResultTab opportunity={opportunity} table={table} />
      </section>
    </>
  );
};

export default ResultPage;
