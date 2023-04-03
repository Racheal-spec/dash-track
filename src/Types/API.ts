import { commonTableResponse } from "./GlobalTypes";

export type debugdataResponse = {
  firstMeaningfulPaint: number;
  cumulativeLayoutShift: number;
  observedCumulativeLayoutShiftMainFrame: number;
  observedLoad: number;
  observedLargestContentfulPaintTs: number;
  observedFirstContentfulPaintAllFrames: number;
  observedNavigationStart: number;
  observedLoadTs: number;
  observedTraceEnd: number;
  observedSpeedIndexTs: number;
  observedTimeOriginTs: number;
  observedLastVisualChangeTs: number;
  observedFirstPaintTs: number;
  observedCumulativeLayoutShift: number;
  firstContentfulPaint: number;
  observedDomContentLoadedTs: number;
  observedFirstPaint: number;
  speedIndex: number;
  observedFirstMeaningfulPaintTs: number;
  observedTotalCumulativeLayoutShift: number;
  maxPotentialFID: number;
  totalBlockingTime: number;
  cumulativeLayoutShiftMainFrame: number;
  observedFirstVisualChange: number;
  observedSpeedIndex: number;
  interactive: number;
  observedTimeOrigin: number;
  observedFirstContentfulPaintAllFramesTs: number;
  observedLargestContentfulPaint: number;
  totalCumulativeLayoutShift: number;
  observedTraceEndTs: number;
  observedLargestContentfulPaintAllFrames: number;
  observedLastVisualChange: number;
  observedLargestContentfulPaintAllFramesTs: number;
  observedFirstMeaningfulPaint: number;
  observedDomContentLoaded: number;
  observedNavigationStartTs: number;
  observedFirstContentfulPaintTs: number;
  observedFirstContentfulPaint: number;
  largestContentfulPaint: number;
  observedFirstVisualChangeTs: number;
};

export type opportunityResponse = commonTableResponse & {
  wastedBytes: number;
  wastedPercent: number;
  totalBytes: number;
  url: string;
};

export type filmstripResponse = {
  data: string;
  timing: number;
  timestamp: number;
};

export type tableResponse = commonTableResponse & {
  scriptParseCompile: number;
  total: number;
  url: string;
  scripting: number;
  duration: number;
  startTime: number;
  statistic: string;
  value: {
    value: number;
    granularity: number;
    type: string;
  };
  totalBytes: number;
  resourceType: string;
  statusCode: number;
  finished: boolean;
  rendererStartTime: number;
  experimentalFromMainFrame: boolean;
  resourceSize: number;
  transferSize: number;
  networkEndTime: number;
  priority: string;
  protocol: string;
  networkRequestTime: number;
  mimeType: string;
  source: {
    line: number;
    column: number;
    type: string;
    url: string;
    urlProvider: string;
  };
  subItems: {
    type: string;
    items: {
      failureReason: string;
      animation: string;
      mainThreadTime: number;
      blockingTime: number;
      url: string;
      transferSize: number;
    }[];
  };
  mainThreadTime: number;
  blockingTime: number;
  entity: string;
  wastedMs: number;
  groupLabel: string;
  group: string;
  score: number;
  label: string;
  requestCount: number;
};
