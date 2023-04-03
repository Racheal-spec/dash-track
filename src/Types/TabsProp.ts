import { ReactNode } from "react";
import { opportunityAudit, tableAudit } from "./GlobalTypes";

export type TabProps = {
  opportunity?: opportunityAudit[];
  table?: tableAudit[];
  postsToShow?: opportunityAudit[];
};
