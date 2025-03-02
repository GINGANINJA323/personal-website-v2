import { createContext, Dispatch, SetStateAction } from "react";
import { colours } from "../constants";
import { Theme } from "../enums";

interface StyleContextObj {
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
}

const StyleContext = createContext<StyleContextObj>({ theme: Theme.Light, setTheme: () => undefined });

export default StyleContext;