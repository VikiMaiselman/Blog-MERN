import React from "react";
import { createTheme } from "@mui/material";

export const CustomThemeContext = React.createContext();

export default function CustomThemeProvider({ children }) {
  const theme = createTheme({
    palette: {
      success: {
        main: "#3f3f3f",
        light: "#DAD3B1",
        dark: "#22222C",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#442E32",
        light: "#DAD3B1",
        dark: "#1F1419",
        contrastText: "#ffffff",
      },
      edit: {
        main: "#114232",
        light: "#F7F6BB",
        dark: "#35374B",
        contrastText: "#ffffff",
      },
      delete: {
        main: "#7469B6",
        light: "#E1AFD1",
        dark: "#5E1675",
        contrastText: "#ffffff",
      },
    },
  });

  return (
    <CustomThemeContext.Provider value={{ theme }}>
      {children}
    </CustomThemeContext.Provider>
  );
}
