import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Users from "./Users";
import Navbar from "../Components/Navbar";
import ReqAuth from "../Components/ReqAuth";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/user"
          element={
            <ReqAuth>
              <Users />
            </ReqAuth>
          }
        />
      </Routes>
    </>
  );
};

export default MainRoutes;
