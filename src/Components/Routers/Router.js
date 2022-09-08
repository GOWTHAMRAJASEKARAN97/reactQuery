import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayAvenger from "../Avengers/DisplayAvenger";
import DisplayAvengers from "../Avengers/DisplayAvengers";
import DependentAvengers from "../DependentAvengers/DependentAvengers";
import DisplayFriends from "../FriendsOfAvengers/DisplayFriends.js";
import DisplaySuitColors from "../Suit Colors/DisplaySuitColors";
import RouterLayout from "./RouterLayout";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RouterLayout />}>
            <Route path="/names" element={<DisplayAvengers />} />
            <Route path="/colors" element={<DisplaySuitColors />} />
            <Route path="/friends" element={<DisplayFriends />} />
            <Route path="/dependent" element={<DependentAvengers />} />
            <Route path="/avengers/:avengerId" element={<DisplayAvenger />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
