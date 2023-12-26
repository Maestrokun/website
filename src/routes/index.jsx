import React from "react";
import {
  BrowserRouter,
  Routes as BrowserRoutes,
  Route,
} from "react-router-dom";
import Home from "../Modules/pages/Home";

function Routes() {
  return (
    <div>
      <BrowserRouter>
        <BrowserRoutes>
          <Route path="" element={<Home />} />
        </BrowserRoutes>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
