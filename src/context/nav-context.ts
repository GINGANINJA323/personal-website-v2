import { createContext, Dispatch, SetStateAction } from "react";
import { Page } from "../enums";

interface NavigationContextObj {
    selected: Page;
    setSelected: Dispatch<SetStateAction<Page>>
}

export const NavigationContext = createContext<NavigationContextObj>({
    selected: Page.Home,
    setSelected: () => undefined
});