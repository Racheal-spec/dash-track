type urlType = {
  url: string;
};

export const API_KEY = import.meta.env.VITE_API_KEY;
export const API_URL = ({ url }: urlType) => {
  return `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=${API_KEY}`;
};
