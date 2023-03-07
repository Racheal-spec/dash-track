import { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { API_URL } from "../ApiRoutes";
import validateUrl from "../utils/validateUrl";

interface ChildrenProp {
  children: ReactNode;
}
type stateProps = {
  data: {
    id: string;
    loadingExperience: object;
    lighthouseResult: object;
  }[];
  handleInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputText: string;
  handleSend?: (event: any) => void;
  isValidate: boolean;
  mainurl: string;
};

//States
const initialVal = {
  data: [],
  inputText: "",
  isValidate: false,
  mainurl: "",
};

const ApiContext = createContext<stateProps>(initialVal);

export const ApiProvider = ({ children }: ChildrenProp) => {
  const [data, setData] = useState<stateProps["data"]>(initialVal.data);
  const [inputText, setInputText] = useState(initialVal.inputText);
  const isValidate = !inputText || validateUrl(inputText);
  const mainurl = "https://" + inputText;

  //Handlers
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };
  const handleSend = () => {
    if (inputText.trim() && isValidate === true) {
      try {
        axios
          .get<typeof data>(API_URL({ url: mainurl }))
          .then((response) => setData(response.data));
        console.log(data);
        setInputText(mainurl);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <ApiContext.Provider
      value={{ data, handleInput, handleSend, inputText, mainurl, isValidate }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
