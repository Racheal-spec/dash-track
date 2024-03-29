import React, { useContext, useRef } from "react";
import BorderCard from "../../components/BorderCard";
import SmallCard from "../../components/SmallCard";
import ApiContext from "../../contexts/ApiContext";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import metricsCalc from "../../utils/metricsCalc";
import Calc from "../../utils/timeFunction";
import FullResultTab from "../../components/TabsComponent/FullResultTab";
import {
  debugdataAudit,
  opportunityAudit,
  tableAudit,
  treemapAudit,
} from "../../Types/GlobalTypes";
import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Button from "../../uikits/Button";
import TabTable from "../../components/TabsComponent/TabTable";
import { TbArrowBackUp } from "react-icons/tb";

const ResultPage: React.FC = () => {
  //=================STATES==================//
  const { data, progress } = useContext(ApiContext);
  const location = useLocation();
  const pdfRef = useRef<HTMLElement>(null);
  const currentUrl = location.search.substring(5);

  //===============VARIABLES==================//
  const formattedDate = new Date(data.analysisUTCTimestamp).toLocaleString();
  const auditObjects = data.lighthouseResult.audits;
  const screenshotObj = data.lighthouseResult.audits["screenshot-thumbnails"];
  const metricsobjects =
    data.lighthouseResult.audits?.metrics?.details.items[0];
  let newKeys = Object.keys(auditObjects);
  let newEl = Object.values(auditObjects);
  let perfScore = data.lighthouseResult.categories.performance.score;
  let opportunity: opportunityAudit[] = [];
  let table: tableAudit[] = [];
  let debugdata: debugdataAudit[] = [];
  let treemap: treemapAudit[] = [];

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

  newEl.forEach((el) => {
    if (el && "details" in el) {
      if (el.details.type === "debugdata") {
        const { details, ...rest } = el;
        debugdata?.push({ details, ...rest });
      }
    }
  });

  newEl.forEach((el) => {
    if (el && "details" in el) {
      if (el.details.type === "treemap-data") {
        const { details, ...rest } = el;
        treemap?.push({ details, ...rest });
      }
    }
  });

  //=============STYLES================//
  const style = {
    fontWeight: "bold",
    fontSize: "1.6rem",
    color: "#1E1E1E",
    padding: "20px 0",
  };
  const styleNone = {
    display: "none",
  };

  //===================HANDLERS================//

  const handleDownload = async () => {
    const input = pdfRef.current;

    await html2canvas(input!).then((canvas) => {
      const pdfData = canvas.toDataURL("image/png");

      const inputWidth = input?.offsetWidth;
      const inputHeight = input?.offsetHeight;
      const orientation = inputWidth! >= inputHeight! ? "l" : "p";
      const pdfFormat = new jsPDF({ orientation, unit: "px", compress: true });
      pdfFormat.internal.pageSize.width = inputWidth ?? 0;
      pdfFormat.internal.pageSize.height = inputHeight ?? 0;
      pdfFormat.addImage(pdfData, "PNG", 0, 0, inputWidth!, inputHeight!);
      pdfFormat.save("Dashtrack_result.pdf");
    });
  };
  let navigate = useNavigate();
  const handleBackBtn = () => navigate(-1);

  return (
    <section className={pdfRef ? "px-10 max-sm:px-0" : ""} ref={pdfRef}>
      <p style={progress === 100 ? styleNone : style}>Preparing Test Result</p>

      <div className="py-10">
        <div
          onClick={handleBackBtn}
          className="dark:text-textDark text-secondary cursor-pointer flex justify-end pb-10"
        >
          <TbArrowBackUp size="1.5rem" />
          <div className="text-sm text-textDark px-1">Go Back</div>
        </div>
        <div className="border border-secondary dark:border-opacity-50 border-opacity-20 rounded-lg py-4 text-black dark:text-greylight text-sm">
          <div className="flex justify-between max-sm:flex-col max-sm:items-start items-center pb-6">
            <div className="flex flex-col">
              <div className="flex py-2">
                <p className="pl-8 max-sm:pl-4 text-center font-bold ">
                  URL -{" "}
                </p>
                <div className="pl-4 font-bold">{currentUrl}</div>
              </div>

              <hr className="ml-8 w-28 text-lineColor dark:text-secondary " />
            </div>

            <div className="flex max-sm:mt-6">
              <div className="text-center pr-4 font-bold max-sm:ml-4 ">
                Date/Time -
              </div>
              <div className="pr-4">{data ? formattedDate : "---"}</div>
            </div>
          </div>

          <div className="flex items-center justify-between max-sm:flex-col">
            <div className="flex items-center py-5">
              <div className="pl-8 max-sm:pl-4 text-center font-bold">
                FROM -{" "}
              </div>
              <div className=" pl-4 w-2/5">
                {data.lighthouseResult
                  ? data.lighthouseResult.environment.hostUserAgent
                  : "---"}
              </div>
            </div>
            <div className="pr-5">
              <Button
                outline
                title="Download Result as PDF"
                onClick={handleDownload}
              />
            </div>
          </div>
        </div>
      </div>
      {/**==============PERFORMANCE SECTION============== */}
      <div className="border border-secondary  dark:border-opacity-50 border-opacity-20 ">
        <div className="py-10">
          <h2 className="text-xl text-urlColor dark:text-offwhite pb-2 pl-8 font-bold">
            Performance Report
          </h2>
        </div>

        <div className="flex px-14 lg:px-36 max-sm:px-4  justify-between items-center max-sm:flex-col divide-x-2 max-sm:divide-x-0 text-lineColor divide-opacity-25 py-10 max-sm:py-3">
          <div className="w-3/12 lg:w-3/12 max-sm:w-6/12 md:w-4/12">
            <div className="flex items-center justify-center flex-col">
              <div className="font-bold">
                <CircularProgressbar
                  maxValue={1}
                  value={perfScore}
                  background={true}
                  text={`${Math.round(perfScore * 100)}%`}
                  backgroundPadding={6}
                  styles={buildStyles({
                    textSize: "12px",
                    backgroundColor:
                      perfScore > 0.89
                        ? "#5bc0be"
                        : perfScore > 0.49
                        ? "#615703"
                        : "#632525",
                    trailColor: "#D8D7D0",
                    textColor: "#fff",
                    pathColor:
                      perfScore > 0.89
                        ? "#93A372"
                        : perfScore > 0.49
                        ? "#B8A603"
                        : "#D14B4B",
                  })}
                />
              </div>
              <div className="flex py-5">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primaryDark"></div>
                  <div className="text-sm text-textPlaceholder px-3">
                    90-100
                  </div>
                </div>
                <div className="flex items-center px-7 ">
                  <div className="w-4 h-4 bg-hoverColor"></div>
                  <div className="text-sm text-textPlaceholder px-3">50-89</div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-redColor"></div>
                  <div className="text-sm text-textPlaceholder px-3">0-49</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-7/12 lg:w-7/12 md:w-6/12 md:max-h-52 max-sm:py-8 max-sm:w-11/12 max-sm:max-h-64 lg:max-h-96 overflow-hidden">
            <img
              src={data.lighthouseResult.fullPageScreenshot.screenshot.data}
              className=" shadow-textPlaceholder shadow-xl "
              alt="dashtrack image result"
            />
          </div>
        </div>
      </div>
      {/**================== Metrics section======================== */}
      <div className="py-10">
        <div>
          <p className="text-2xl dark:text-offwhite text-urlColor py-1 font-bold ">
            Metrics
          </p>
        </div>
        <div className="grid sm:gap-2 md: gap-3 lg:gap-0 max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 py-7">
          <div>
            <SmallCard
              metricstitle="FCP"
              timing={
                metricsobjects &&
                "firstContentfulPaint" in metricsobjects &&
                metricsobjects?.firstContentfulPaint ? (
                  metricsCalc(metricsobjects?.firstContentfulPaint) < "1.8s" ? (
                    <p style={{ color: "#5bc0be" }}>
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
                    <p style={{ color: "#5bc0be" }}>
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
                    <p style={{ color: "#5bc0be" }}>
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
                  metricsCalc(metricsobjects.totalBlockingTime) <= "0.15s" ? (
                    <p style={{ color: "#5bc0be" }}>
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
                  <>---</>
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
                    <p style={{ color: "#5bc0be" }}>
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
                    <p style={{ color: "#5bc0be" }}>
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
      </div>
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
      <section className="my-10 border border-lineColor border-opacity-25 dark:border-secondary">
        <div className="bg-smallcardColor  dark:bg-darkSmallCardColor dark:bg-opacity-25 py-5 px-2 mb-5">
          <h3 className="font-bold dark:text-offwhite text-xl ">
            Visual Loading Screen
          </h3>
          <p className="py-2 dark:text-greylight">
            {screenshotObj?.description}
          </p>
        </div>
        <div className="grid gap-2 bg-secondary p-2 max-sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 ">
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
        <FullResultTab
          opportunity={opportunity}
          table={table}
          debugdata={debugdata}
          treemap={treemap}
        />
      </section>
    </section>
  );
};

export default ResultPage;
