import { useState } from "react";
import { createContext } from "react";
import axios, { AxiosError, AxiosProgressEvent } from "axios";
import { API_URL } from "../ApiRoutes";
import validateUrl from "../utils/validateUrl";
import { useNavigate } from "react-router-dom";
import { checkUrl } from "../utils/checkUrl";
import { ChildrenProp, stateProps } from "../Types/ContextProp";

type ErrorProp = {
  message: string;
  resError: {
    data: {
      error: {
        code: 0;
        message: "";
      };
    };
  };
  errors: Record<string, string[]>;
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
        ["screenshot-thumbnails"]: null,
        metrics: null,
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
  resError: {
    data: {
      error: {
        code: 0,
        message: "",
      },
    },
  },
};

const ApiContext = createContext<stateProps>(initialVal);

export const ApiProvider = ({ children }: ChildrenProp) => {
  const [data, setData] = useState<stateProps["data"]>(initialVal.data);
  const [inputText, setInputText] = useState(initialVal.inputText);
  const isValidate = !inputText || validateUrl(inputText);
  const mainurl = checkUrl(inputText);
  const [progress, setProgress] = useState(0);
  const [resError, setError] = useState(initialVal.resError);

  //Handlers
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };
  let navigate = useNavigate();

  const handleSend = () => {
    if (inputText.trim() && isValidate === true) {
      setProgress(0);
      axios
        .get<typeof data>(API_URL({ url: mainurl }), {
          onDownloadProgress: (progressEvent: any) => {
            let progressByBytes = Math.round(progressEvent.progress * 100);
            setProgress(progressByBytes);
          },
        })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          setError(error.response);
        });
      setInputText(mainurl);
      navigate(`/report?url=${mainurl}`);
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
        resError,
        isValidate,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
