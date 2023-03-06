import React from "react";
import logoDashTrack from "../../assets/logoDashTrack.png";

const Navbar: React.FC = () => {
  return (
    <>
      <section className="bg-lightgreenbg shadow-sm sticky px-10">
        <nav className="py-5">
          <ul className="flex justify-between">
            <li>
              <img src={logoDashTrack} alt="dashtrack logo" />
            </li>
            <ul className="flex divide-x-2 divide-textHeaderDark">
              <li className="px-2 text-sm">Login</li>
              <li className="px-2 text-sm">Sign-up</li>
            </ul>
          </ul>
        </nav>
      </section>
      <hr className="w-11/12 mx-auto text-greylight" />
    </>
  );
};

export default Navbar;