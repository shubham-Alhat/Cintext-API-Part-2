import { createContext, useContext } from "react";

// Exporting and Creating a Context with default value i.e a object
export const themeContext = createContext({
  theme: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// Exporting and creating a Context Provider
export const ThemeProvider = themeContext.Provider;

// Exporting and Creating a Custom hook.
// this will prevent us to import both useContext() hook and themeContext.
export default function useThemeContext() {
  return useContext(themeContext);
}
