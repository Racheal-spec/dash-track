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
  handleSend?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isValidate: boolean;
};

const initialVal = {
  data: [],
  inputText: "",
  isValidate: false,
};

const ApiContext = createContext<stateProps>(initialVal);

export const ApiProvider = ({ children }: ChildrenProp) => {
  const [data, setData] = useState<stateProps["data"]>(initialVal.data);
  const [inputText, setInputText] = useState(initialVal.inputText);
  const isValidate = !inputText || validateUrl(inputText);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
    console.log(inputText);
  };
  const handleSend = () => {
    if (inputText.trim() && isValidate === true) {
      try {
        axios
          .get<typeof data>(API_URL({ url: "https://" + inputText }))
          .then((response) => setData(response.data));
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <ApiContext.Provider
      value={{ data, handleInput, handleSend, inputText, isValidate }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
