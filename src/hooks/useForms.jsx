import { useContext } from "react";
import { FormContext } from "../components/context/FormContext";

export const useForms = () => {
	return useContext(FormContext);
};
