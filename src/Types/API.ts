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

export type opportunityResponse = {
  wastedBytes: number;
  wastedPercent: number;
  node: {
    lhId: string;
    path: string;
    type: string;
    snippet: string;
    nodeLabel: string;
    boundingRect: {
      right: number;
      left: number;
      width: number;
      bottom: number;
      height: number;
      top: number;
    };
    selector: string;
  };
  totalBytes: number;
  url: string;
};

export type filmstripResponse = {
  data: string;
  timing: number;
  timestamp: number;
};
