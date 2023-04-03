import {
  debugdataResponse,
  filmstripResponse,
  opportunityResponse,
  tableResponse,
} from "./API";

export type commonAudit = {
  description: string;
  title: string;
  score: number;
  id: string;
  displayValue?: string;
};

export type commonTableResponse = {
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
};

export type analyticsType =
  | "opportunity"
  | "table"
  | "debugdata"
  | "criticalrequestchain"
  | "filmstrip"
  | "treemap";

export type auditType<D extends analyticsType, T> = {
  details: {
    type: D;
    items: T[];
    overallSavingsBytes?: number;
  };
  // postsToShow?: []
} & commonAudit;

export type opportunityAudit = auditType<"opportunity", opportunityResponse>;

export type debugdataAudit = auditType<"debugdata", Partial<debugdataResponse>>;

export type filmstripAudit = auditType<"filmstrip", filmstripResponse>;

export type tableAudit = auditType<"table", Partial<tableResponse>>;

export type audit =
  | opportunityAudit
  | debugdataAudit
  | filmstripAudit
  | tableAudit;
