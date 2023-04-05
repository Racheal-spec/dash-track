import React from "react";
import logoDashTrack from "../../assets/logoDashTrack.png";
import Button from "../../uikits/Button";

const Navbar: React.FC = () => {
  return (
    <>
      <section className="shadow-sm sticky px-10">
        <nav className="py-5">
          <ul className="flex justify-between">
            <li>
              <img src={logoDashTrack} alt="dashtrack logo" />
            </li>
            <ul className="flex divide-x-2 divide-textHeaderDark">
              <li className="px-2 text-sm">
                <Button title="Sign-up" />
              </li>
              <li className="px-2 text-sm">
                {" "}
                <Button outline={true} title="Login" />
              </li>
            </ul>
          </ul>
        </nav>
      </section>
      <hr className="w-11/12 mx-auto text-greylight" />
    </>
  );
};

export default Navbar;
