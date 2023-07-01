import React from "react";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTheme } from "../../utils/changeTheme";

const Navbar: React.FC = () => {
  const { handleMode, darkmode } = useTheme();
  return (
    <>
      <section className="shadow-sm sticky px-10 max-sm:px-2">
        <nav className="py-5">
          <ul className="flex justify-between items-center">
            <li>
              <Link to="/">
                <p className="logo text-xl max-sm:text-sm text-primaryDark dark:text-primaryColor">
                  _ _ _Dashtrack
                </p>
              </Link>
            </li>
            <ul className="flex justify-center items-center divide-x-2 divide-textHeaderDark dark:divide-smallcardColor divide-opacity-20 dark:divide-opacity-20">
              <li className="dark:text-textDark text-xs">Switch Mode</li>
              <li
                className="px-2 cursor-pointer flex justify-center items-center"
                onClick={handleMode}
              >
                {darkmode ? (
                  <BsMoon fontSize="large" />
                ) : (
                  <BsSun fontSize="large" color="#ffffff" />
                )}
              </li>
            </ul>
          </ul>
        </nav>
      </section>
      <hr className="w-11/12 mx-auto text-greylight dark:text-darkStroke" />
    </>
  );
};

export default Navbar;
