import React from "react";
import AppRouter from "./components/AppRouter";
import "./App.css";

import AuthProvider from "./contexts/Auth.context";
import CustomThemeProvider from "./contexts/CustomTheme.context";

export default React.memo(function App() {
  return (
    <AuthProvider>
      <CustomThemeProvider>
        <MainApp />
      </CustomThemeProvider>
    </AuthProvider>
  );
});

function MainApp() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}
