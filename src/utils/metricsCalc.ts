export const metricsCalc = (val: number) => {
  let secondsVal = val * 0.001;
  if (val < 1) {
    return Number(val.toString().substring(0, 4)) + "ms";
  } else if (secondsVal.toString().length <= 4) {
    return secondsVal + "s";
  } else {
    let finalVal = Number(secondsVal.toString().substring(0, 4));
    return finalVal + "s";
  }
};

export default metricsCalc;
