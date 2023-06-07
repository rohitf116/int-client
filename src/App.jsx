import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import { TokenProvider } from "./components/TokenContext";
import Success from "./components/Success";

const App = () => {
  return (
    <TokenProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="success" element={<Success />} />
      </Routes>
    </TokenProvider>
  );
};

export default App;
