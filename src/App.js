import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Designplox from "./components/designplox/Designplox";
import Menu from "./components/menu/Menu";
const App = () => {
  return (
    <Fragment>
      <div className="app">
        <Menu />
        <BrowserRouter>
          <Routes>
            <Route paht="/design" elements={<Designplox />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Fragment>
  );
};
export default App;
