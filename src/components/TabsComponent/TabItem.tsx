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
  return (
    <>
      <ul>
        <li
          onClick={handleClick}
          className="w-4/6 py-2 cursor-pointer dark:cursor-pointer"
        >
          {activeTab === id ? (
            <>
              <p className="mr-8 dark:text-offwhite font-bold ">{title}</p>
              <div className="lg:w-96 md:w-60 sm:w-32 h-1 bg-primaryDark my-2 font-bold" />
            </>
          ) : (
            <p className="mr-8 dark:text-offwhite ">{title}</p>
          )}
        </li>
      </ul>
    </>
  );
};

export default TabItem;
