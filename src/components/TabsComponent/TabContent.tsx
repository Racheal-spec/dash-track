import React, { ReactNode } from "react";

type TabContentProps = {
  id: string;
  children: ReactNode;
  activeTab: string;
};
const TabContent: React.FC<TabContentProps> = ({ id, children, activeTab }) => {
  return <div>{activeTab === id ? <div>{children}</div> : null}</div>;
};

export default TabContent;
