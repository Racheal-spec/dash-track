import React from "react";

type TabItemProps = {
  onClick?: (event: React.MouseEventHandler<HTMLLIElement>) => void;
  id: string;
  setActiveTab: (id: string) => void;
  title: string;
  activeTab: string;
};
const TabItem: React.FC<TabItemProps> = ({
  id,
  setActiveTab,
  title,
  activeTab,
}) => {
  const handleClick = () => {
    setActiveTab(id);
  };
  const tabstyle = {
    backgroundColor: "#778C7B",
    width: "100%",
    color: "#fff",
    fontWeight: "bold",
  };
  return (
    <>
      <li
        onClick={handleClick}
        className="w-4/6 py-2 rounded-3xl cursor-pointer"
        style={activeTab === id ? tabstyle : {}}
      >
        <p className="mx-20">{title}</p>
      </li>
    </>
  );
};

export default TabItem;
