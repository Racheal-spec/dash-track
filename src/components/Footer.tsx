import React from "react";
import logoDashTrack from "../assets/logoDashTrack.png";

const Footer: React.FC = () => {
  return (
    <section className="px-10">
      <hr className="w-10/12 mx-auto py-5 text-lineColor opacity-25" />
      <ul className="flex justify-between py-5">
        <li>
          <img src={logoDashTrack} className="w-32" alt="dashtrack logo" />
        </li>
        <ul className="flex items-center">
          <li> &copy;</li>
          <li className="text-sm pl-3">All Rights Reserved</li>
        </ul>
      </ul>
    </section>
  );
};

export default Footer;
