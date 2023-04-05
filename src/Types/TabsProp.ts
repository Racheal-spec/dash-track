import { ReactNode } from "react";
import {
  debugdataAudit,
  opportunityAudit,
  tableAudit,
  treemapAudit,
} from "./GlobalTypes";

export type TabProps = {
  opportunity?: opportunityAudit[];
  table?: tableAudit[];
  postsToShow?: opportunityAudit[];
  debugdata?: debugdataAudit[];
  treemap?: treemapAudit[];
};
