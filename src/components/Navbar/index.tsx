import React from "react";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { useTheme } from "../../utils/changeTheme";

const Navbar: React.FC = () => {
  const { handleMode, darkmode } = useTheme();

  return (
    <>
      <section className="shadow-sm sticky px-10 max-sm:px-2">
        <nav className="py-5">
          <ul className="flex justify-between items-center">
            <li>
              <p className="logo text-xl max-sm:text-sm text-textHeaderDark dark:text-primaryColor">
                _ _ _Dashtrack
              </p>
            </li>
            <ul className="flex divide-x-2 divide-textHeaderDark dark:divide-smallcardColor divide-opacity-20 dark:divide-opacity-20">
              <li className="dark:text-textDark text-sm px-2">Switch Mode</li>
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
              {/* <li className="px-2 text-sm">
                <Button
                  className={
                    "px-4 py-[10px] font-semibold hover:animate-ease cursor-pointer hover:bg-secondary hover:text-offwhite hover:scale text-black  bg-primaryColor"
                  }
                  title="Sign-up"
                />
              </li>
              <li className="px-2 text-sm dark:text-offwhite">
                {" "}
                <Button outline={true} title="Login" />
              </li> */}
            </ul>
          </ul>
        </nav>
      </section>
      <hr className="w-11/12 mx-auto text-greylight dark:text-darkStroke" />
    </>
  );
};

export default Navbar;
