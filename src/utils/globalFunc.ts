export const LearnLink = (val: string) => {
  return val?.split("[")[1]?.split("(")[1];
};
