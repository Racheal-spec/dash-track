import { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";
import axios, { AxiosProgressEvent } from "axios";
import { API_URL } from "../ApiRoutes";
import validateUrl from "../utils/validateUrl";
import { useNavigate } from "react-router-dom";
import { checkUrl } from "../utils/checkUrl";

interface ChildrenProp {
  children: ReactNode;
}

type stateProps = {
  data: {
    id: string;
    loadingExperience: object;
    lighthouseResult: {
      environment: {
        hostUserAgent: string;
      };
      fullPageScreenshot: {
        screenshot: {
          data: string;
        };
      };
      audits: {
        ["cumulative-layout-shift,first-contentful-paint,total-blocking-time,speed-index,interactive,largest-contentful-paint"]: {
          description: string;
          id: string;
          displayValue: string;
        };
        ["screenshot-thumbnails"]: {
          description: string;
          details: {
            items: {
              data: string;
              timing: number;
              timestamp: number;
            }[];
          };
        };
        metrics: {
          details: {
            items: {
              firstContentfulPaint: number;
              firstMeaningfulPaint: number;
              largestContentfulPaint: number;
              speedIndex: number;
              totalBlockingTime: number;
              totalCumulativeLayoutShift: number;
              interactive: number;
            }[];
          };
        };
      };
      categories: {
        performance: {
          title: string;
          score: number;
          auditRefs: {
            acronym: string;
            weight: number;
          }[];
        };
      };
    };
    analysisUTCTimestamp: string;
  };
  handleInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputText: string;
  handleSend?: (event: any) => void;
  isValidate: boolean;
  mainurl: string;
  progress: number;
};

//States
const initialVal = {
  data: {
    id: "",
    loadingExperience: {},
    lighthouseResult: {
      environment: {
        hostUserAgent: "",
      },
      fullPageScreenshot: {
        screenshot: {
          data: "",
        },
      },
      audits: {
        ["cumulative-layout-shift,first-contentful-paint,total-blocking-time,speed-index,interactive,largest-contentful-paint"]:
          {
            description: "",
            id: "",
            displayValue: "",
          },
        ["screenshot-thumbnails"]: {
          description: "",
          details: {
            items: [
              {
                data: "",
                timing: 0,
                timestamp: 0,
              },
            ],
          },
        },
        metrics: {
          details: {
            items: [
              {
                firstContentfulPaint: 0,
                firstMeaningfulPaint: 0,
                largestContentfulPaint: 0,
                speedIndex: 0,
                totalBlockingTime: 0,
                totalCumulativeLayoutShift: 0,
                interactive: 0,
              },
            ],
          },
        },
      },
      categories: {
        performance: {
          title: "",
          score: 0,
          auditRefs: [{ acronym: "", weight: 0 }],
        },
      },
    },
    analysisUTCTimestamp: "",
  },
  inputText: "",
  isValidate: false,
  mainurl: "",
  progress: 0,
};

const ApiContext = createContext<stateProps>(initialVal);

export const ApiProvider = ({ children }: ChildrenProp) => {
  const [data, setData] = useState<stateProps["data"]>(initialVal.data);
  const [inputText, setInputText] = useState(initialVal.inputText);
  const isValidate = !inputText || validateUrl(inputText);
  const mainurl = checkUrl(inputText);
  const [progress, setProgress] = useState(0);

  //Handlers
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };
  let navigate = useNavigate();

  const handleSend = () => {
    if (inputText.trim() && isValidate === true) {
      setProgress(0);
      try {
        axios
          .get<typeof data>(API_URL({ url: mainurl }), {
            onDownloadProgress: (progressEvent: any) => {
              let progressByBytes = Math.round(progressEvent.progress * 100);
              setProgress(progressByBytes);
            },
          })
          .then((response) => setData(response.data));

        setInputText(mainurl);
        navigate(`/report?url=${mainurl}`);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <ApiContext.Provider
      value={{
        data,
        handleInput,
        progress,
        handleSend,
        inputText,
        mainurl,

        isValidate,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
