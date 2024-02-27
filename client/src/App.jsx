import React from "react";
import AppRouter from "./components/AppRouter";
import "./App.css";

import AuthProvider from "./contexts/Auth.context";

export default React.memo(function App() {
  return (
    <AuthProvider>
      <MainApp />
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
