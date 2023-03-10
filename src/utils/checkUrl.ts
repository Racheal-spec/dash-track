export const checkUrl = (text: string) => {
  if (text.includes("https://")) {
    return text;
  } else {
    return "https://" + text;
  }
};
