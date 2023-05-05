import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="px-10">
      <hr className="w-10/12 mx-auto py-5 text-lineColor opacity-25" />
      <ul className="flex justify-between py-5">
        <li>
          <p className="logo max-sm:text-sm text-xl text-textHeaderDark dark:text-primaryColor">
            _ _ _Dashtrack
          </p>
        </li>
        <div className="flex items-center dark:text-textDark">
          <li> &copy;</li>
          <li className="text-sm max-sm:text-xs pl-3 dark:text-textDark">
            All Rights Reserved
          </li>
        </div>
      </ul>
    </footer>
  );
};

export default Footer;
