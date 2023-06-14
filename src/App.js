import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";

const App = () => {
  useEffect(() => {
    document.title = "crud-operation";
  }, []);
  return (
    <>
      <BrowserRouter basename="/CRUD-Operation">
        <Routes>
          <Route path="/" element={<Create />}>
            {" "}
          </Route>
          <Route path="/read" element={<Read />}>
            {" "}
          </Route>
          <Route path="/update/:id" element={<Update />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
