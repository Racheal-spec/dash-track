import { ReactNode } from "react";
import { audit, auditType, commonAudit } from "./GlobalTypes";
import { TabProps } from "./TabsProp";

export interface ChildrenProp {
  children: ReactNode;
}

export type metricsProps = commonAudit & {
  details: {
    items: {
      firstContentfulPaint: number;
      firstMeaningfulPaint: number;
      largestContentfulPaint: number;
      speedIndex: number;
      totalBlockingTime: number;
      totalCumulativeLayoutShift: number;
      interactive: number;
    }[];
  };
};

export type stateProps = {
  resError?: {
    data: {
      error: {
        code: number;
        message: string;
      };
    };
  };
  data: {
    id: string;
    loadingExperience: object;
    lighthouseResult: {
      environment: {
        hostUserAgent: string;
      };
      fullPageScreenshot: {
        screenshot: {
          data: string;
        };
      };
      audits: {
        [key: string]: audit | null;
      };
      categories: {
        performance: {
          title: string;
          score: number;
          auditRefs: {
            acronym: string;
            weight: number;
          }[];
        };
      };
    };
    analysisUTCTimestamp: string;
  };
  handleInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputText: string;
  handleSend?: (event: any) => void;
  isValidate: boolean;
  mainurl: string;
  progress: number;
};
