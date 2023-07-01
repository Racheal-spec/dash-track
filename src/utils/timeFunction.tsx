import React from "react";

const Calc = (val: string | number, title: string) => {
  if (title === "Largest Contentful Paint" && val <= "2.5s") {
    return <p style={{ color: "#5bc0be" }}>{val}</p>;
  } else if (title === "Largest Contentful Paint" && val < "4.0s") {
    return <p style={{ color: "#9C912C" }}>{val}</p>;
  } else if (title === "First Contentful Paint" && val <= "1.8s") {
    return <p style={{ color: "#5bc0be" }}>{val}</p>;
  } else if (title === "First Contentful Paint" && val < "4.0s") {
    return <p style={{ color: "#9C912C" }}>{val}</p>;
  } else if (title === "Total Blocking Time" && val <= "0.15s") {
    return <p style={{ color: "#5bc0be" }}>{val}</p>;
  } else if (title === "Total Blocking Time" && val < "0.24s") {
    return <p style={{ color: "#9C912C" }}>{val}</p>;
  } else if (title === "Time to Interactive" && val <= "3.8s") {
    return <p style={{ color: "#5bc0be" }}>{val}</p>;
  } else if (title === "Time to Interactive" && val < "7.3s") {
    return <p style={{ color: "#9C912C" }}>{val}</p>;
  } else if (title === "Speed Index" && val <= "4.3s") {
    return <p style={{ color: "#5bc0be" }}>{val}</p>;
  } else if (title === "Speed Index" && val < "5.8s") {
    return <p style={{ color: "#9C912C" }}>{val}</p>;
  } else if (title === "Cumulative Layout Shift" && val <= "0.1") {
    return <p style={{ color: "#5bc0be" }}>{val}</p>;
  } else if (title === "Cumulative Layout Shift" && val < "0.25") {
    return <p style={{ color: "#9C912C" }}>{val}</p>;
  } else {
    return <p style={{ color: "red" }}>{val}</p>;
  }
};
export default Calc;
