import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import NavGraphic from "../components/NavGraphic";


const LayoutPublic = () => {
  
  return (
    <>
        
        <Outlet />
    </>    
  );
};

export default LayoutPublic;
