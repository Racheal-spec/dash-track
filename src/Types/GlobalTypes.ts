import {
  debugdataResponse,
  filmstripResponse,
  opportunityResponse,
} from "./API";

export type commonAudit = {
  description: string;
  title: string;
  score: number;
  id: string;
  displayValue?: string;
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
  };
} & commonAudit;

export type opportunityAudit = auditType<"opportunity", opportunityResponse>;

export type debugdataAudit = auditType<"debugdata", Partial<debugdataResponse>>;

export type filmstripAudit = auditType<"filmstrip", filmstripResponse>;

export type audit = opportunityAudit | debugdataAudit | filmstripAudit;
